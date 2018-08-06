const CategoriesModel = require('./categories.model');
const envConfig = require('../../config/env');
const { commonErrors } = require('../error');

module.exports.getCategoriesByPage = async function (page) {
  const limit = envConfig.modules.categories.perPageLimit;
  const skip = (page - 1) * limit;
  const result = await CategoriesModel.find().sort({ category: 'asc' }).skip(skip).limit(limit).exec();
  if (!result.length) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.getCategoryById = async function (id) {
  const result = await CategoriesModel.findById(id).exec();
  if (!result) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.getCategoryByIdAndUpdate = async function (id, update) {
  const result = await CategoriesModel.findByIdAndUpdate(id, { $set: update }, { new: true }).exec();
  if (!result) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.updateCategoryById = async function (id, update) {
  const result = await CategoriesModel.updateOne({ _id: id }, { $set: update }).exec();
  if (result.n === 0) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.saveCategory = function (doc) {
  const modelObj = new CategoriesModel(doc);
  const error = modelObj.validateSync();
  if (error) throw new commonErrors.NotAcceptableError('invalid category!');
  return modelObj.save();
}

module.exports.deleteCategoryById = async function (id) {
  const result = await CategoriesModel.deleteOne({ _id: id });
  if (result.n === 0) throw new commonErrors.NotFoundError();
  return result;
}
