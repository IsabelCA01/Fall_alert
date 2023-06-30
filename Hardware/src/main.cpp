// Librerías

#include <Arduino.h>
#include <Wire.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

// Definiciones Conexión ESP32 - Sensor
#define GY85_ADDRESS 0x53 // Dirección del acelerómetro
#define REG_POWER 0x2D    // Dirección del registro de control de energía
#define REG_X_LSB 0x32    // Dirección del registro de la aceleración en el eje X LSB
#define REG_X_MSB 0x33    // Dirección del registro de la aceleración en el eje X MSB
#define REG_Y_LSB 0x34    // Dirección del registro de la aceleración en el eje Y LSB
#define REG_Y_MSB 0x35    // Dirección del registro de la aceleración en el eje Y MSB
#define REG_Z_LSB 0x36    // Dirección del registro de la aceleración en el eje Z LSB
#define REG_Z_MSB 0x37    // Dirección del registro de la aceleración en el eje Z MSB
float acceleration_x, acceleration_y, acceleration_z;

// Definiciones botón
const int BOTON = 4;
bool envioDatos = true;

// Definiciones para controlar el tiempo
unsigned long tiempoAnteriorPublicacion = 0;
const unsigned long intervaloPublicacion = 20 * 1000;  // Intervalo de publicación en milisegundos
const unsigned long intervaloDebounce = 80;  // Intervalo de debounce para evitar el rebote del botón en milisegundos

// Definiciones conexión wifi
#define SSID "JD"
#define PASS "12345678"

// Definiciones MQTT
const char *MQTT_Server = {"broker.hivemq.com"};
int Puerto = 1883;
String topico = "proyectoIOT/ICJG";
WiFiClient wifiClient;
PubSubClient MQTTClient(wifiClient);

//Definición led ON/OFF
const int ledPin = 2;

// Definiciones para alarma de caída
float magnitude_acceleration;
const float ACCELERATION_THRESHOLD = 5;
bool alarma = false;

//Led indicador de encendido
void EncendidoApagado(){
    if (envioDatos == true)
    {
        digitalWrite(ledPin, HIGH);
    }
    else
    {
        digitalWrite(ledPin, LOW);
    }
}

// Enviar o no datos con botón
void EnviarDatos()
{
    static unsigned long tiempoBotonAnterior = 0;
    unsigned long tiempoActual = millis();

    if (tiempoActual - tiempoBotonAnterior >= intervaloDebounce)
    {
        if (digitalRead(BOTON) == HIGH)
        {
            envioDatos =! envioDatos;
        }
        tiempoBotonAnterior = tiempoActual;
    }
}

// Método para leer los datos del sensor
void ReadSensorData(){
    Wire.beginTransmission(GY85_ADDRESS);
    Wire.write(REG_X_LSB);
    Wire.endTransmission();
    Wire.requestFrom(GY85_ADDRESS, 6);

    if (Wire.available() >= 6)
    {
        int x = Wire.read() | (Wire.read() << 8);
        int y = Wire.read() | (Wire.read() << 8);
        int z = Wire.read() | (Wire.read() << 8);

        acceleration_x = x / 16384.0;
        acceleration_y = y / 16384.0;
        acceleration_z = z / 16384.0;
    }
}

//Método para general alarma de caída
void AlarmaCaida(){
    magnitude_acceleration = sqrt((acceleration_x * acceleration_x) + (acceleration_y * acceleration_y) + (acceleration_z * acceleration_z));

    if (magnitude_acceleration > ACCELERATION_THRESHOLD)
    {
        alarma = true;
    }
    else
    {
        alarma = false;
    }
}

//Método para publicar los datos en el servidor MQTT en formato JSON
void PublishSensorData(){
  unsigned long tiempoActual = millis();
  if (tiempoActual - tiempoAnteriorPublicacion >= intervaloPublicacion)
  {
    if (envioDatos == true)
    {
      // Crear objeto JSON
      StaticJsonDocument<200> doc;
      doc["aceleracionX"] = acceleration_x;
      doc["aceleracionY"] = acceleration_y;
      doc["aceleracionZ"] = acceleration_z;
      doc["alarma"] = alarma;
      doc["boton"] = envioDatos;

      // Serializar el objeto JSON en una cadena
      String mensaje;
      serializeJson(doc, mensaje);

      // Publicar el objeto JSON en el topic especificado
      MQTTClient.publish(topico.c_str(), mensaje.c_str());
    }
    tiempoAnteriorPublicacion = tiempoActual;
  }
}

// Configuración conexión sensor
void InitSensor()
{
    Wire.begin();
    Wire.beginTransmission(GY85_ADDRESS);
    Wire.write(REG_POWER);
    Wire.write(0x08);
    Wire.endTransmission();
    Serial.begin(9600);
}

// Setear servidor MQTT
void InitServerMQTT()
{
    MQTTClient.setServer(MQTT_Server, Puerto);
    if (MQTTClient.connect("ICJG"))
    {
        Serial.println("Conectado al servidor MQTT");
    }
    else
    {
        Serial.println("Fallo al conectar al servidor MQTT");
    }
}

// Conectarse a wifi
void InitWiFi(){
    WiFi.begin(SSID, PASS);
    Serial.print("Conectando a ");
    Serial.print(SSID);

    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(50);
    }

    if (WiFi.status() == WL_CONNECTED)
    {
        Serial.println("Conexión exitosa!!");
    }
    else
    {
        Serial.println("Fallo al conectar");
    }
}

// Método principal
void setup()
{
    // Configuración del botón
    pinMode(BOTON, INPUT_PULLDOWN);

    // Configuración del led
    pinMode(ledPin,OUTPUT);

    // Configuración conexión del sensor
    InitSensor();

    // Configuración de la conexión wifi
    InitWiFi();

    // Server MQTT
    InitServerMQTT();
}

void loop()
{
    // Llamamos al método del botón
    EnviarDatos();

    // Llamamos al método de la alarma
    AlarmaCaida();

    // Llamamos al método que lee el sensor
    ReadSensorData();

    // Llamamos el método que publica los datos en el servidor MQTT
    PublishSensorData();

    //Llamamos al método que enciende o apaga el led
    EncendidoApagado();
    
    //Mantenemos conexión con MQTT
    MQTTClient.loop();
}

// Fin del programa