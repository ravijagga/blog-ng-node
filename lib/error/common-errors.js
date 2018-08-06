const clientHttpStatus = require('../../config/lib/http-status').client_Error_4xx;
const serverHttpStatus = require('../../config/lib/http-status').server_Error_5xx;
const CustomError = require('./custom.error');

module.exports.BadRequestError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || clientHttpStatus._bad_request_400.message,
      httpStatusCode || clientHttpStatus._bad_request_400.code
    );
  }
};

module.exports.ForbiddenError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || clientHttpStatus._forbidden_403.message,
      httpStatusCode || clientHttpStatus._forbidden_403.code
    );
  }
};

module.exports.ConflictError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || clientHttpStatus._conflict_409.message,
      httpStatusCode || clientHttpStatus._conflict_409.code
    );
  }
};

module.exports.NotFoundError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || clientHttpStatus._not_found_404.message,
      httpStatusCode || clientHttpStatus._not_found_404.code
    );
  }
};

module.exports.UnauthorizedError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || clientHttpStatus._unauthorized_401.message,
      httpStatusCode || clientHttpStatus._unauthorized_401.code
    );
  }
};

module.exports.NotAcceptableError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || clientHttpStatus.not_acceptable_406.message,
      httpStatusCode || clientHttpStatus.not_acceptable_406.code
    );
  }
};

module.exports.InternalServerError = class extends CustomError {
  constructor(message, httpStatusCode) {
    super(
      message || serverHttpStatus._internal_server_error_500.message,
      httpStatusCode || serverHttpStatus._internal_server_error_500.code
    );
  }
};