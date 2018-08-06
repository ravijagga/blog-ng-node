const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const envConfig = require('../../config/env');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const usersSeed = require('./users.seed');
const commonErrors = require('../error/common-errors');

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
    default: new mongoose.Types.ObjectId()
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  emailToken: {
    type: String
  },
  hash: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  profileImg: String,
  verified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { versionKey: false, timestamps: true });

userSchema.statics.clearAndSeed = async function () {
  const users = await usersSeed.getUsersSeed();
  const UsersModel = mongoose.model('User');

  try {
    // clear database before seeding
    await UsersModel.deleteMany({}).exec();

    // seed database
    for (user of users) {
      await UsersModel.create(user);
    }
  } catch (err) {
    throw new commonErrors.InternalServerError(err.message);
  }
};

userSchema.statics.generateObjectId = function () {
  const objectId = new mongoose.Types.ObjectId();
  return objectId;
};

userSchema.statics.getAuthToken = function (user) {
  const authToken = jwt.sign(user, envConfig.JWT_SECRET_KEY);
  return authToken;
};

userSchema.statics.verifyAuthTokenAndGetUser = function (authToken) {
  const user = jwt.verify(authToken, envConfig.JWT_SECRET_KEY);
  return user;
};

userSchema.statics.getEmailToken = function (user) {
  const emailToken = jwt.sign(user, envConfig.JWT_SECRET_KEY, { expiresIn: '24h' });
  return emailToken;
};

userSchema.statics.verifyEmailTokenAndGetUser = function (emailToken) {
  const user = jwt.verify(emailToken, envConfig.JWT_SECRET_KEY);
  return user;
};

userSchema.statics.getPasswordHash = async function (password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

module.exports = mongoose.model('User', userSchema, 'users');
