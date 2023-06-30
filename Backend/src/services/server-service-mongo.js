const {
  getAllValues,
  getValueInfo,
  updateValueInfo,
  deleteValueInfo,
  getButtonValue,
  getAlarmValue 
} = require('../repositories/server-mongo.repository');

const getSensor1Info = async () => {
  try {
    return await getAllValues();
  } catch (error) {
    console.log(error);
  }
};

const getValueSensor1 = async () => {
  try {
    return await getValueInfo();
  } catch (error) {
    console.log(error);
  }
};

const updateInfoSensor1 = async (id, aceleracionX, aceleracionY, aceleracionZ) => {
  try {
    return await updateValueInfo(id, aceleracionX, aceleracionY, aceleracionZ);
  } catch (error) {
    console.log(error);
  }
};

const deleteInfoSensor1 = async (id) => {
  try {
    return await deleteValueInfo(id);
  } catch (error) {
    console.log(error);
  }
};

const getButtonValueSensor1 = async () => {
  try {
    return await getButtonValue();
  } catch (error) {
    console.log(error);
  }
};

const getAlarmValueSensor1 = async () => {
  try {
    return await getAlarmValue();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getSensor1Info,
  getValueSensor1,
  updateInfoSensor1,
  deleteInfoSensor1,
  getButtonValueSensor1,
  getAlarmValueSensor1
};
