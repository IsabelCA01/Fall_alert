const { ValuesDB } = require('../models/values.model');

const getAllValues = async () => {
  try {
    return ValuesDB.find().sort({date: "desc"});
  } catch (error) {
    console.log(error);
  }
};

const getValueInfo = async () => {
  try {
    return ValuesDB.findOne().sort({date: "desc", _id:-1}).limit(1);
  } catch (error) {
    console.log(error);
  }
};

const updateValueInfo = async (id, aceleracionX, aceleracionY, aceleracionZ) => {
  try {
    return ValuesDB.findOneAndUpdate(
      { _id: id },
      { aceleracionX, aceleracionY, aceleracionZ },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteValueInfo = async (id) => {
  try {
    return ValuesDB.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

const getButtonValue = async () => {
  try {
    const value = await ValuesDB.findOne().sort({ date: "desc", _id: -1 }).limit(1).select("boton");
    return value.boton;
  } catch (error) {
    console.log(error);
  }
};

const getAlarmValue = async () => {
  try {
    const value = await ValuesDB.findOne().sort({ date: "desc", _id: -1 }).limit(1).select("alarma");
    return value.alarma;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllValues,
  getValueInfo,
  updateValueInfo,
  deleteValueInfo,
  getButtonValue,
  getAlarmValue
};
