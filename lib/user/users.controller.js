const usersService = require('./users.service');
const usersValidation = require('./users.validation');
const commonErrors = require('../error/common-errors');
const { apiResponseHandler } = require('../api-response');
const UsersModel = require('./users.model');
const { commonUtils } = require('../common');
const emailUtils = require('../email/email.utils');

module.exports.getUsersByPage = async function (req, res) {
  const page = parseInt(req.query.page, 10) || 1;
  const users = await usersService.getUsersByPage(page);

  res.send(users);
}

module.exports.saveUser = async function (req, res) {
  // get required data
  let user = {
    _id: UsersModel.generateObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    verified: false
  }

  if (req.file && req.file.path) user.profileImg = req.file.path;

  // delete undefined properties
  user = commonUtils.deleteEmptyObjProps(user);

  // Validate user data
  const { err } = usersValidation.validateNewUser(user);
  if (err) {
    throw new commonErrors.NotAcceptableError(
      err.message || 'Invalid data received!'
    );
  }

  // Hash password
  user.hash = await UsersModel.getPasswordHash(user.password);
  delete user.password;

  // generate email token
  user.emailToken = UsersModel.getEmailToken({ _id: user._id });

  // send verification email
  try {
    const emailResult = await emailUtils.sendVerificationEmail(
      user.email,
      user.emailToken
    );
  } catch (err) {
    throw new commonErrors.InternalServerError(
      err.message || 'got error while sending verification email!'
    );
  }

  // Save User in DB and get saved User Obj
  const savedUser = await usersService.saveUser(user);

  // send api response
  apiResponseHandler.sendSuccessCreated(res, savedUser);
}

module.exports.getUserById = async function (req, res) {
  const user = await usersService.getUserById(req.id);

  res.send(user);
}

module.exports.getLoggedInUser = async function (req, res) {
  const user = await usersService.getUserById(req.user._id);

  res.send(user);
}

module.exports.getUserByIdAndUpdateForAdmin = async function (req, res) {
  let user;

  // get required user data
  try {
    user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      gender: req.body.gender,
      // TODO: add email verification
      verified: true
    };
  } catch (err) {
    throw new commonErrors.NotAcceptableError('Didn\'t receive required data!');
  }

  const { error } = usersValidation.validateUpdatedProfile(user);
  if (error) throw new commonErrors.NotAcceptableError('Invalid data received!');

  const updatedUser = await usersService.getUserByIdAndUpdate(req.id, user);

  apiResponseHandler.sendSuccessOK(res, updatedUser);
}

module.exports.updateMyProfile = async function (req, res) {
  let user;

  // get required user data
  try {
    user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      verified: true
    };
  } catch (err) {
    throw new commonErrors.NotAcceptableError('Didn\'t receive required data!');
  }

  const { error } = usersValidation.validateUpdatedProfile(user);
  if (error) throw new commonErrors.NotAcceptableError('Invalid data received!');

  const updatedUser = await usersService.getUserByIdAndUpdate(req.id, user);

  apiResponseHandler.sendSuccessOK(res, updatedUser);
};

module.exports.deleteUserById = async function (req, res) {
  const result = await usersService.deleteUserById(req.id);

  apiResponseHandler.sendSuccessOK(res);
}
