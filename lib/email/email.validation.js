const Joi = require('joi');

module.exports.validateEmail = function (email) {
  const emailSchema = Joi.string().email().required();

  return emailSchema.validate(email);
};
