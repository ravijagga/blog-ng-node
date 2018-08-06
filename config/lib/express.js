const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const envConfig = require('../env');
const { commonErrors } = require('../../lib/error');

module.exports = function (app) {
  // Parse JSON Request Body
  app.use(express.json());

  // set static folders
  app.use('/uploads', express.static(path.join(__basedir, 'uploads')));
  app.use(express.static(path.join(__basedir, 'dist', 'blog-ng-node')));

  // Check jwt private key
  if (!envConfig.JWT_SECRET_KEY) {
    throw new commonErrors.InternalServerError('JWT Private Key not found!');
    process.exit(1);
  }

  // Production middlewares
  if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(compression());
  }
};
