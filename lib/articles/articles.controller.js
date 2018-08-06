const articlesService = require('./articles.service');
const articlesValidation = require('./articles.validation');
const commonErrors = require('../error/common-errors');
const { apiResponseHandler } = require('../api-response');
const { commonUtils } = require('../common');

module.exports.getArticlesByPage = async function (req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const articles = await articlesService.getArticlesByPage(page);

  res.send(articles);
}

module.exports.saveArticle = async function (req, res) {
  let article = {
    title: req.body.title,
    body: req.body.body,
    categories: req.body.categories,
    user: req.user._id
  };

  // validate article data
  const { error } = articlesValidation.validateNewArticle(article);
  if (error) throw new commonErrors.NotAcceptableError(error.message || 'Invalid data received!');

  // save to db
  const savedArticle = await articlesService.saveArticle(article);

  // send api response
  apiResponseHandler.sendSuccessCreated(res, savedArticle);
}

module.exports.getArticleById = async function (req, res) {
  const article = await articlesService.getArticleById(req.id);

  res.send(article);
}

module.exports.getArticleByIdAndUpdate = async function (req, res) {
  // Users can edit only their own articles
  if (!req.user.isAdmin) {
    // check own article
    const article = await articlesService.getArticleById(req.id);
    if (article._id !== req.user.id) {
      throw new commonErrors.UnauthorizedError('You cannot edit other\'s articles!');
    }
  }

  // get article data
  let article = {
    title: req.body.title,
    body: req.body.body,
    categories: req.body.categories
  };

  // delete empty props
  article = commonUtils.deleteEmptyObjProps(article);

  // validate article update obj
  const { error } = articlesValidation.validateUpdateArticle(article);
  if (error) throw new commonErrors.NotAcceptableError('Invalid data received!');

  const updatedArticle = await articlesService.getArticleByIdAndUpdate(req.id, article);

  apiResponseHandler.sendSuccessOK(res, updatedArticle);
}

module.exports.deleteArticleById = async function (req, res) {
  const result = await articlesService.deleteArticleById(req.id);

  apiResponseHandler.sendSuccessOK(res);
}
