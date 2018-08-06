const express = require('express');
const router = express.Router();

// TODO: frontend error logging
router.route('/')
  .post((req, res) => {
    // get error obj from req body
    // and log it
  });

module.exports = router;
