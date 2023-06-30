const { ValuesDB } = require("../../../models/values.model");
const mqttBroker = "mqtt://broker.hivemq.com";
const mqttTopic = "proyectoIOT/ICJG";

var mqtt = require("mqtt");
var client = mqtt.connect(mqttBroker);

client.on("connect", function () {
  client.subscribe(mqttTopic);
});

client.on("message", function (topic, message) {
  const data = JSON.parse(message.toString());

  // Obtener la fecha y hora actual en la zona horaria de Colombia
  const fechaActual = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });

  // Agregar el campo "date" con la fecha y hora actual
  const sensorData = {
    aceleracionX: data.aceleracionX,
    aceleracionY: data.aceleracionY,
    aceleracionZ: data.aceleracionZ,
    alarma: data.alarma,
    boton: data.boton,
    date: fechaActual,
  };

  // Guardar en MongoDB
  const valuesdb = new ValuesDB(sensorData);
  valuesdb.save();

  console.log(message.toString());
});
