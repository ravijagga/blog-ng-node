const UsersModel = require('./users.model');
const envConfig = require('../../config/env');
const { commonErrors } = require('../error');
const _ = require('lodash');

module.exports.getUsersByPage = async function (page) {
  const limit = envConfig.modules.users.perPageLimit;
  const skip = (page - 1) * limit;
  const result = await UsersModel
    .find()
    .select('-emailToken -hash')
    .sort({ createdAt: 'desc' })
    .skip(skip)
    .limit(limit)
    .exec();
  if (!result.length) throw new commonErrors.NotFoundError();
  return result;
};

module.exports.getUserById = async function (id) {
  const result = await UsersModel.findById(id).select('-emailToken -hash').exec();
  if (!result) throw new commonErrors.NotFoundError();
  return result;
};

module.exports.getUserByIdAndUpdate = async function (id, update) {
  const result = await UsersModel
    .findByIdAndUpdate(id, { $set: update }, { new: true })
    .select('-hash')
    .exec();
  if (!result) throw new commonErrors.NotFoundError();
  return result;
};

module.exports.updateUserById = async function (id, update) {
  const result = await UsersModel.updateOne({ _id: id }, { $set: update }).exec();
  if (result.n === 0) throw new commonErrors.NotFoundError();
  return result;
};

module.exports.saveUser = async function (obj) {
  const doc = new UsersModel(obj);
  const error = doc.validateSync();
  if (error) throw new commonErrors.NotAcceptableError('invalid user!');
  let savedUser = await doc.save();
  // return _.omit(savedUser, ['_id', 'firstName', 'lastName', 'email', 'gender', 'verified', 'isAdmin']);
  return _.omit(savedUser.toJSON(), ['emailToken', 'hash']);
};

module.exports.deleteUserById = async function (id) {
  const result = await UsersModel.deleteOne({ _id: id });
  if (result.n === 0) throw new commonErrors.NotFoundError();
  return result;
};
