const express = require('express');
const cors = require('cors');
const mongoDB = require('./database/mgdb/mongodb');

require("./database/mgdb/sub-mongo");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//inicializations
const app = express();
app.use(cors());
mongoDB.connect();

// Settings
app.set('port', process.env.PORT || 5002);
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(process.env.API_VERSION_ROUTE, require("../config/routes/server-routes-mongo"));