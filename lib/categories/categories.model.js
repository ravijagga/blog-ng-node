const mongoose = require('mongoose');
const { categoryRegExp } = require('./categories.validation');
const categorySeedData = require('./categories.seed');
const commonErrors = require('../error/common-errors');

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    maxlength: 50
  }
}, { versionKey: false });

categorySchema.statics.clearAndSeed = async function () {
  const CategoryModel = mongoose.model('Category');

  try {
    // Delete all categories before seeding
    await CategoryModel.deleteMany({}).exec();

    // Seed all categories
    for (singleCategory of categorySeedData) {
      await CategoryModel.create(singleCategory);
    }
  } catch (err) {
    throw new commonErrors.InternalServerError(err.message);
  }
};

module.exports = mongoose.model('Category', categorySchema, 'categories');
