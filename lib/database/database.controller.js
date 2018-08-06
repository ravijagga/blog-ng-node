const UsersModel = require('../user/users.model');
const CategoriesModel = require('../categories/categories.model');
const ArticlesModel = require('../articles/articles.model');
const { apiResponseHandler } = require('../api-response');

module.exports.clearAndSeed = async function (req, res) {
  // clear seed users
  await UsersModel.clearAndSeed();

  // clear seed categories
  await CategoriesModel.clearAndSeed();

  // clear seed articles
  await ArticlesModel.clearAndSeed();

  apiResponseHandler.sendSuccessOKWithMsg(res, 'Database reset successfully.');
};
