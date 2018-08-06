const _ = require('lodash');
const bcrypt = require('bcrypt');
const UsersModel = require('../user/users.model');
const commonErrors = require('../error/common-errors');
const authValidation = require('./auth.validation');

module.exports.login = async function (req, res) {
  // validate login details
  const loginDetails = _.pick(req.body, ['email', 'password']);
  const { error } = authValidation.validateLoginDetails(loginDetails);
  if (error) throw new commonErrors.ForbiddenError(error.message || 'Email or password is incorrect!');

  // find user by email
  const user = await UsersModel.findOne({ email: loginDetails.email }, { _id: 1, email: 1, hash: 1, isAdmin: 1 });
  if (!user) throw new commonErrors.ForbiddenError('Email or password is incorrect!');

  // compare user hash
  const match = await bcrypt.compare(loginDetails.password, user.hash);
  if (match) {
    const authToken = UsersModel.getAuthToken(_.pick(user, ['_id', 'isAdmin']));
    res.header('X-Auth-Token', authToken).status(200).send({
      success: {
        message: 'Logged in successfully, please find auth token in header.'
      }
    });
  } else {
    res.status(403).send(false);
  }
};
