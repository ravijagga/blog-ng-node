const mongoose = require('mongoose');
const articlesSeed = require('./articles.seed');
const commonErrors = require('../error/common-errors');

const articlesSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 250,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  // TODO: Add timestamps: true in all models where updatedAt field is required.
}, { versionKey: false, timestamps: true });

articlesSchema.statics.clearAndSeed = async function () {
  const ArticlesModel = mongoose.model('articles');
  const articles = await articlesSeed.getArticlesSeed();

  try {
    // Delete all articles before seeding
    await ArticlesModel.deleteMany({}).exec();

    // Seed all articles
    for (article of articles) {
      await ArticlesModel.create(article);
    }
  } catch (err) {
    throw new commonErrors.InternalServerError(err.message);
  }
};

module.exports = mongoose.model('articles', articlesSchema, 'articles');
