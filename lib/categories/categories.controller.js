const categoriesService = require('./categories.service');
const categoriesValidation = require('./categories.validation');
const commonErrors = require('../error/common-errors');
const { apiResponseHandler } = require('../api-response');

module.exports.getCategoriesByPage = async function (req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const categories = await categoriesService.getCategoriesByPage(page);

  res.send(categories);
}

module.exports.saveCategory = async function (req, res) {
  const category = { category: req.body.category };
  const { error } = categoriesValidation.validate(category);
  if (error) throw new commonErrors.NotAcceptableError('Invalid data received!');

  const savedCategory = await categoriesService.saveCategory(category);

  apiResponseHandler.sendSuccessCreated(res, savedCategory);
}

module.exports.getCategoryById = async function (req, res) {
  const category = await categoriesService.getCategoryById(req.id);

  res.send(category);
}

module.exports.getCategoryByIdAndUpdate = async function (req, res) {
  const category = { category: req.body.category };
  const { error } = categoriesValidation.validate(category);
  if (error) throw new commonErrors.NotAcceptableError('Invalid data received!');

  const updatedCategory = await categoriesService.getCategoryByIdAndUpdate(req.id, category);

  apiResponseHandler.sendSuccessOK(res, updatedCategory);
}

module.exports.deleteById = async function (req, res) {
  const result = await categoriesService.deleteCategoryById(req.id);

  apiResponseHandler.sendSuccessOK(res);
}
