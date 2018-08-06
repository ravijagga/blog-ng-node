const Joi = require('joi');

const nameRegExp = new RegExp('^[a-z]+(( [a-z]([a-z]+)*)+)*$', 'i');

module.exports.validateNewUser = function (obj) {
  const schema = Joi.object().keys({
    _id: Joi.object(),
    firstName: Joi.string().regex(nameRegExp, { name: 'name' }).max(50).required(),
    lastName: Joi.string().regex(nameRegExp, { name: 'name' }).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    gender: Joi.string().valid('male', 'female').required(),
    profileImg: Joi.string(),
    verified: Joi.boolean(),
    isAdmin: Joi.boolean()
  });

  return schema.validate(obj);
};

module.exports.validateUpdatedProfile = function (obj) {
  const schema = Joi.object().keys({
    firstName: Joi.string().regex(nameRegExp, { name: 'name' }).max(50),
    lastName: Joi.string().regex(nameRegExp, { name: 'name' }).max(50),
    email: Joi.string().email(),
    password: Joi.string(),
    gender: Joi.string().valid('male', 'female'),
    verified: Joi.boolean(),
    isAdmin: Joi.boolean()
  });

  return schema.validate(obj);
};
