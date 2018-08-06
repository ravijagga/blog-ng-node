const Joi = require('joi');

const categoryRegExp = new RegExp('^[a-z]+(( [a-z]([a-z]+)*)+)*$', 'i');

module.exports.validate = function (obj) {
  const schema = Joi.object().keys({
    category: Joi.string().regex(categoryRegExp, { name: 'category' }).max(50).required()
  });

  return schema.validate(obj);
}
