const Joi = require('joi');

module.exports.validateNewArticle = function (obj) {
  const schema = Joi.object().keys({
    title: Joi.string().max(100).required(),
    body: Joi.string().max(1000).required(),
    categories: Joi.array().items(Joi.string().alphanum().length(24)),
    user: Joi.string().alphanum().length(24).required()
  });

  return schema.validate(obj);
};

module.exports.validateUpdateArticle = function (obj) {
  const schema = Joi.object().keys({
    title: Joi.string().max(100),
    body: Joi.string().max(1000),
    categories: Joi.array().items(Joi.string().alphanum().length(24)),
    user: Joi.string().alphanum().length(24)
  });

  return schema.validate(obj);
};
