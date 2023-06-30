# Fall Alert
Fall Alert is a project created during the IoT course taken in the first semester of 2023. I had the opportunity to work with my partner Jhon Diego Gomez Cifuentes, and together we created Fall Alert. 

## What is it?
Fall alert is the new system for monitoring falls and sudden movements of patients. Designed primarily for geriatric patients, but applicable to all needs.

It starts with a GY-85 sensor, which is connected to an ESP 32, to form the hardware part of the device that takes care of constantly collecting data on the patient's condition. 

Then, the ESP-32, through MQTT communication protocols, sends the data to a broker, which is automatically stored in a Mongo DB server.

Subsequently, this data is constantly sent to the web page, which is updated every 15 seconds. There they are analyzed, and in case of detecting a sudden change in the patient's condition, an alarm is issued, recommending the caregiver to check the patient. 

## Some things to keep in mind

- You need to install Node.js in the pertinent archives.

- The website was created using Vite + React

- The Hardware part of the code was programmed from Visual Studio Code, using PlatformIO extension.


