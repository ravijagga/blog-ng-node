const logger = require('../../config/lib/logger');
const { apiResponseHandler } = require('../api-response');

module.exports = (err, req, res, next) => {
  logger.log({
    level: 'error',
    message: err.message || 'Message Not Available!',
    httpStatusCode: err.httpStatusCode || 'Status Code not provided!',
    stack: err.stack || 'Error stack trace not available',
    timestamp: err.timestamp || 'Timestamp not available!'
  });

  apiResponseHandler.sendError(res, err);
};