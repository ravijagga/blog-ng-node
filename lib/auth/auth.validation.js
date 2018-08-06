const Joi = require('joi');

module.exports.validateLoginDetails = function (loginDetails) {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  return schema.validate(loginDetails);
};