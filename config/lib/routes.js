const express = require('express');
const path = require('path');

const playgroundRoute = require('../../__playground/playground.route');
const articlesRoute = require('../../lib/articles/articles.route');
const categoriesRoute = require('../../lib/categories/categories.route');
const usersRoute = require('../../lib/user/users.route');
const authRoute = require('../../lib/auth/auth.route');
const emailRoute = require('../../lib/email/email.route');
const databaseRoute = require('../../lib/database/database.route');

module.exports = function (app) {
  // Our Playground
  app.use('/play', playgroundRoute);

  // API Components
  app.use('/api/articles', articlesRoute);
  app.use('/api/categories', categoriesRoute);
  app.use('/api/users', usersRoute);
  app.use('/api/auth', authRoute);
  app.use('/api/email', emailRoute);
  app.use('/api/database', databaseRoute);

  // API Documentation
  app.use('/api-docs', express.static('swagger-ui'));
  // app.use('/api', (req, res) => res.status(301).redirect('/api-docs'));

  // Catch-All
  app.use('*', (req, res) => {
    res.sendFile(path.join(__basedir, 'dist', 'blog-ng-node', 'index.html'));
  });
};
