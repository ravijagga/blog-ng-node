const ArticlesModel = require('./articles.model');
const envConfig = require('../../config/env');
const { commonErrors } = require('../error');

module.exports.getArticlesByPage = async function (page) {
  const limit = envConfig.modules.articles.perPageLimit;
  const skip = (page - 1) * limit;
  let result;
  try {
    result = await ArticlesModel
      .find()
      .sort({ createdAt: 'desc' })
      .skip(skip)
      .limit(limit)
      .populate('categories', '_id category')
      .populate('user', '_id firstName lastName')
      .exec();
  } catch (err) {
    console.log('from catch', err);
  }

  if (!result.length) throw new commonErrors.NotFoundError('No Article found!');
  return result;
}

module.exports.getArticleById = async function (id) {
  const result = await ArticlesModel
    .findById(id)
    .populate('categories', '_id category')
    .populate('user', '_id firstName lastName')
    .exec();
  if (!result) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.getArticleByIdAndUpdate = async function (id, update) {
  const result = await ArticlesModel
    .findByIdAndUpdate(id, { $set: update }, { new: true })
    .populate('categories', '_id category')
    .populate('user', '_id firstName lastName')
    .exec();
  if (!result) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.updateArticleById = async function (id, update) {
  const result = await ArticlesModel.updateOne({ _id: id }, { $set: update }).exec();
  if (result.n === 0) throw new commonErrors.NotFoundError();
  return result;
}

module.exports.saveArticle = function (obj) {
  const doc = new ArticlesModel(obj);
  const error = doc.validateSync();
  if (error) throw new commonErrors.NotAcceptableError('invalid article!');
  // TODO: populate categories and user
  return doc.save();
}

module.exports.deleteArticleById = async function (id) {
  const result = await ArticlesModel.deleteOne({ _id: id });
  if (result.n === 0) throw new commonErrors.NotFoundError();
  return result;
}
