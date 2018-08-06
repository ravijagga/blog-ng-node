const mongoose = require('mongoose');
const envConfig = require('../env');
const chalk = require('chalk');

module.exports = function () {
  mongodb_url = envConfig.database.url;
  mongoose.connect(mongodb_url)
    .then(() => {
      console.log(chalk.green('Database connected'));
    })
    .catch((err) => {
      console.log(chalk.red('Database connection error '), err);
    });
};