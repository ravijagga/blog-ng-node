const express = require('express');
const router = express.Router();
const databaseController = require('./database.controller');


router.route('/reset')
  .get(databaseController.clearAndSeed);

module.exports = router;
