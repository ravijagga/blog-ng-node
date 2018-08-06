const articlesController = require('./articles.controller');
const ArticlesModel = require('./articles.model');
const articlesRoute = require('./articles.route');
const articlesService = require('./articles.service');
const articlesValidation = require('./articles.validation');

module.exports = {
  articlesController,
  ArticlesModel,
  articlesRoute,
  articlesService,
  articlesValidation
};
