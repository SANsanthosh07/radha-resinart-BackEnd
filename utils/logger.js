const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        format.colorize({ all: true }),
        format.timestamp({ format: "DD-MM-YYYY HH-mm-ss" }),
        format.printf((info) => {
          const { timestamp, level, message } = info;
          return `${timestamp}-[${level}]= ${message}`;
        })
      ),
    }),
  ],
});

module.exports = logger;
