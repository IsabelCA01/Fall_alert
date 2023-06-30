const {
  getSensor1Info,
  getValueSensor1,
  updateInfoSensor1,
  deleteInfoSensor1,
  getButtonValueSensor1,
  getAlarmValueSensor1
} = require("../services/server-service-mongo");

const getSensor1Value = async (req, res) => {
  try {
    const sensor1Info = await getValueSensor1();
    return res.json(sensor1Info);
  } catch (error) {
    console.log(error);
  }
};

const getSensor1Values = async (req, res) => {
  try {
    const sensor1Info = await getSensor1Info();
    return res.json(sensor1Info);
  } catch (error) {
    console.log(error);
  }
};

const updateValueSensor1 = async (req, res) => {
  try {
    const { id, aceleracionX, aceleracionY, aceleracionZ } = req.body;
    const sensor1Info = await updateInfoSensor1(id, aceleracionX, aceleracionY, aceleracionZ);
    return res.json(sensor1Info);
  } catch (error) {
    console.log(error);
  }
};

const deleteRecordSensor1 = async (req, res) => {
  try {
    const { id } = req.body;
    const sensor1Info = await deleteInfoSensor1(id);
    return res.json(sensor1Info);
  } catch (error) {
    console.log(error);
  }
};

getButtonValueSensor = async (req, res) => {
  try {
    const buttonValue = await getButtonValueSensor1();
    return res.json({ boton: buttonValue  });
  } catch (error) {
    console.log(error);
  }
};

getAlarmValueSensor = async (req, res) => {
  try {
    const alarmValue = await getAlarmValueSensor1();
    return res.json({ alarma: alarmValue });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSensor1Values,
  getSensor1Value,
  updateValueSensor1,
  deleteRecordSensor1,
  getButtonValueSensor,
  getAlarmValueSensor
};

