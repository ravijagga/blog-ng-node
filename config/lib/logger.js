const winston = require('winston');
const envConfig = require('../env');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'info' })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ]
});

// If we're not in production then log to the `console`
if (process.env.NODE_ENV !== 'production' || envConfig.misc.showConsole) {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));

  logger.exceptions.handle(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;