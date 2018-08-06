const express = require('express');
require('express-async-errors');
const app = express();
if (process.env.NODE_ENV !== "production") require('dotenv').config();
const { errorHandler } = require('./lib/error');

// Set base directory
global.__basedir = __dirname;

// dbConnection
require('./config/lib/db.connection')();

// Express Config
require('./config/lib/express')(app);

// Routes
require('./config/lib/routes')(app);

// Handle Error (always configure after routes)
app.use(errorHandler);
process.on('unhandledRejection', (err) => {
  throw err;
});

module.exports = app;
