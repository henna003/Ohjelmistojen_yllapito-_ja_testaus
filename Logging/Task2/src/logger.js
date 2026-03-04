//configuring the logger using Winston
const { createLogger, transports, format } = require('winston');

const customFormat = format.printf(({ level, message }) => {
    return message;
})

const logger = createLogger({
  level: 'info',
  format: format.combine(
    customFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

module.exports = logger;