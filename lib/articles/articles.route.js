const express = require('express');
const router = express.Router();
const articlesController = require('./articles.controller');
const { commonMiddleware } = require('../common');
const { userAuth, adminAuth } = require('../auth/auth.middleware');

router.route('/')
  .get(articlesController.getArticlesByPage)
  .post(userAuth, articlesController.saveArticle);

router.param('id', commonMiddleware.processIdParam);

router.route('/:id')
  .get(articlesController.getArticleById)
  // articles can update only their own articles, but admin can update everyone's
  .put(userAuth, articlesController.getArticleByIdAndUpdate)
  .delete([userAuth, adminAuth], articlesController.deleteArticleById);

module.exports = router;
