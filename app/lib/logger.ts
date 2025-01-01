import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "info",
  format: format.combine(
    format.colorize(), // Adds color to the log levels
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Adds a timestamp to each log
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "app.log" }), // Logs will be saved to app.log
  ],
});

export default logger;
