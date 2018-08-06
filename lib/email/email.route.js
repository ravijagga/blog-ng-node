const express = require('express');
const router = express.Router();
const emailController = require('./email.controller');
const { userAuth } = require('../auth/auth.middleware');

router.route('/verify/:emailToken')
  .get(emailController.verifyEmail);

// change current user email address
router.route('/me')
  .put(userAuth, emailController.changeEmail);

module.exports = router;
