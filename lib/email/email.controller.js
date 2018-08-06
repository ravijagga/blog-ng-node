const UsersModel = require('../user/users.model');
const { commonErrors } = require('../error');
const { apiResponseHandler } = require('../api-response');
const emailUtils = require('./email.utils');
const emailValidation = require('./email.validation');

module.exports.verifyEmail = async function (req, res) {
  if (req.params.emailToken) {
    const emailToken = req.params.emailToken;
    let user;
    try {
      user = await UsersModel.verifyEmailTokenAndGetUser(emailToken);
    } catch (err) {
      throw new commonErrors.BadRequestError('Email token is not correct!');
    }
    // New User Account Email Verification
    if (!user.newEmail) {
      // match emailToken
      const fetchedUser = await UsersModel.findById(user._id).exec();
      if (!fetchedUser) throw new commonErrors.NotFoundError('User not found!');

      if (fetchedUser.verified) {
        apiResponseHandler.sendSuccessOKWithMsg(res, 'User is already verified!');
      } else if (fetchedUser.emailToken && fetchedUser.emailToken === emailToken) {
        fetchedUser.emailToken = null;
        fetchedUser.verified = true;
        try {
          const updatedUser = await fetchedUser.save();
        } catch (err) {
          throw new commonErrors.InternalServerError(
            err.message || 'Internal Server Error!'
          );
        }
        apiResponseHandler.sendSuccessOKWithMsg(res, 'Email verified successfully!');
      } else {
        throw new commonErrors.InternalServerError();
      }
    }
    // Change Email Verification
    else {
      // search by user id
      const fetchedUser = await UsersModel.findById(user._id).exec();
      if (!fetchedUser) throw new commonErrors.NotFoundError('User not found!');

      // change email
      fetchedUser.email = user.newEmail;
      const savedUser = await fetchedUser.save();
      if (!savedUser) throw new commonErrors.InternalServerError();

      apiResponseHandler.sendSuccessOKWithMsg('Email changed succussfuly!');
    }

  }
};

module.exports.changeEmail = async function (req, res) {
  // get current user id
  const user = req.user;

  // get and validate new email
  const newEmail = req.body.newEmail;

  const { err } = emailValidation.validateEmail(newEmail);
  if (err) throw new commonErrors.NotAcceptableError(err.message);

  const userData = await UsersModel.findById(user._id).exec();
  if (userData.email === newEmail) throw new commonErrors.NotAcceptableError(
    'This email address is already registered. Please give a new email address.'
  );

  // generate jwt token
  const emailToken = UsersModel.getEmailToken({ _id: user._id, newEmail });

  // send jwt token to new email address
  try {
    const emailInfo = await emailUtils.sendVerificationEmail(newEmail, emailToken);
  } catch (err) {
    throw new commonErrors.InternalServerError(
      err.message || 'got error while sending mail to new email address'
    );
  }

  apiResponseHandler.sendSuccessOKWithMsg(res, `Verification mail sent to ${newEmail}`);
};
