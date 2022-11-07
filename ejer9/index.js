const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });


  logger.error("error personalizado");

  
  function errorPuntual() {
    throw new Error("error puntual");
  }
    try {
        errorPuntual();
    } catch (e) {
        logger.log("error", e.toString());
  }

module.exports = logger;