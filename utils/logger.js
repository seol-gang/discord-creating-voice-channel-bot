require('dotenv').config();
const winston = require('winston');
const WinstonDaily = require('winston-daily-rotate-file');

const { combine, timestamp, printf } = winston.format;

const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat
  ),
  transports: [
    new WinstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: 'logs',
      filename: '%DATE%.log',
      maxFiles: 30,
      zippedArchive: true,
    }),

    new WinstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: 'logs/error',
      filename: '%DATE%.log',
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

module.exports = { logger };
