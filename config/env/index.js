const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const currentEnv = (function () {
  if (process.env.NODE_ENV) {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
      return process.env.NODE_ENV;
    }
    // if NODE_ENV value is not 'development || production'
    // then console log warning and return 'development' by default
    else {
      console.warn(`NODE_ENV supported values are 'development' and 'production', currently NODE_ENV='${ process.env.NODE_ENV }'. Setting 'development' by default`);
      return 'development';
    }
  } else {
    return 'development';
  }
})();

const defaultConfig = require('./default');
const envConfig = fs.existsSync(path.join(__dirname, `${ currentEnv }.js`)) ?
  require(`./${ currentEnv }`) : null;
const mergedConfig = envConfig ? _.merge(defaultConfig, envConfig) : defaultConfig;

console.log(`current env: ${mergedConfig.env}`);

module.exports = mergedConfig;