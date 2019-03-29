const winston = require('winston');

const simpleFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.align(),
  winston.format.simple(),
);

const jsonFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.align(),
  winston.format.json(),
);

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.File({
          level: 'info',
          filename: `${__dirname}/../logs/infos.log`,
          format: simpleFormat,
        }),
        new winston.transports.File({
          level: 'error',
          filename: `${__dirname}/../logs/errors.log`,
          format: jsonFormat,
        }),
      ],
      exceptionHandlers: [
        new winston.transports.File({
          filename: `${__dirname}/../logs/exceptions.log`,
        }),
      ],
      exitOnError: false,
    });

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(new winston.transports.Console({
        handleExceptions: true,
        format: simpleFormat,
      }));
    }

    return this.logger;
  }
}

module.exports = Logger;
