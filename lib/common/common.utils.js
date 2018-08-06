const _ = require('lodash');

module.exports.deleteEmptyObjProps = function (obj) {
  for (prop in obj) {
    if (_.isEmpty(obj[prop])) {
      delete obj[prop];
    }
  }
  return obj;
};