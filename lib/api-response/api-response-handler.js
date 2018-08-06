const httpStatus = require('../../config/lib/http-status');

module.exports.sendError = function (res, error) {
  res.status(error.httpStatusCode || 500).send({ error: { message: error.message } });
};

module.exports.sendSuccessOK = function (res, result) {
  res.status(httpStatus.success_2xx._ok_200.code)
    .send(result || { success: { message: httpStatus.success_2xx._ok_200.message } });
};

module.exports.sendSuccessOKWithMsg = function (res, message) {
  res.status(httpStatus.success_2xx._ok_200.code)
    .send({ success: { message: message || httpStatus.success_2xx._ok_200.message } });
};

module.exports.sendSuccessCreated = function (res, result) {
  res.status(httpStatus.success_2xx._created_201.code)
    .send(result || { success: { message: httpStatus.success_2xx._created_201.message } });
};

module.exports.sendSuccessAccepted = function (res, result) {
  res.status(httpStatus.success_2xx.accepted_202.code)
    .send(result || { success: { message: httpStatus.success_2xx.accepted_202.message } });
};
