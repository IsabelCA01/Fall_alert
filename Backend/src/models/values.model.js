const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
  aceleracionX: String,
  aceleracionY: String,
  aceleracionZ: String,
  alarma: Boolean,
  boton: Boolean,
  date: String // Agregar el campo "date" con el tipo Date y valor por defecto Date.now
});

const ValuesDB = mongoose.model('Jhon&Isabel', ValueSchema, 'Jhon&Isabel');

module.exports = { ValuesDB };
