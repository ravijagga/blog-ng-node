const express = require('express');
const router = express.Router();
const path = require('path');

const { sendEmail } = require('../lib/email/email.utils');
const UsersModel = require('../lib/user/users.model');

router.route('/')
  .get(async function (req, res) {
    // Play Here...
    const users = await UsersModel.find({}).exec();
    res.send(users);


  });

module.exports = router;
