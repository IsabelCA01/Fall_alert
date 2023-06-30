const mongoose = require('mongoose');

const configDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
};

const connect = async () => {
  try {
    const url = process.env.MONGODB_URI;
    await mongoose.connect(url, configDB);
    console.log('MongoDB is conected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connect };
