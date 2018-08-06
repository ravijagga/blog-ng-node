const Joi = require('joi');

function validateId(id) {
  const schema = Joi.string().alphanum().length(24).required();

  return schema.validate(id);
}

module.exports = { validateId };