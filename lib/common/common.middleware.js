const commonValidation = require('./common.validation');
const commonErrors = require('../error/common-errors');

function processIdParam(req, res, next, id) {
  const { error } = commonValidation.validateId(id);
  if (error) throw new commonErrors.BadRequestError('Invalid Id!');
  req.id = id;
  next();
}

module.exports = { processIdParam };