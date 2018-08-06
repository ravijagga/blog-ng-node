const express = require('express');
const router = express.Router();
const categoriesController = require('./categories.controller');
const { commonMiddleware } = require('../common');
const CustomError = require('../error/custom.error');
const { userAuth, adminAuth } = require('../auth/auth.middleware');

router.route('/')
  .get(categoriesController.getCategoriesByPage)
  .post([userAuth, adminAuth], categoriesController.saveCategory);

router.param('id', commonMiddleware.processIdParam);

router.route('/:id')
  .get(categoriesController.getCategoryById)
  .put([userAuth, adminAuth], categoriesController.getCategoryByIdAndUpdate)
  .delete([userAuth, adminAuth], categoriesController.deleteById);

module.exports = router;
