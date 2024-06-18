import winston from "winston";
import winstonDailyRotateFile from "winston-daily-rotate-file";

import { Logtail } from "@logtail/node";
import { LogtailTransport } from "@logtail/winston";

const { createLogger, format, transports } = winston;
const {
  combine,
  timestamp,
  label,
  printf,
  colorize,
  json,
  prettyPrint,
  errors,
  align,
} = format;

const commonFormat = combine(
  errors({ stack: true }),
  json(),
  prettyPrint(),
  label({
    label: "backend",
  }),
  timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  colorize({
    all: true,
    colors: {
      error: "red",
      warn: "yellow",
      info: "green",
      debug: "blue",
    },
  }),
  printf(({ level, message, label, timestamp, meta, stack }) => {
    const formattedMeta = meta ? ` ${JSON.stringify(meta)}` : "";
    const logMessage = `${timestamp} [${label}] ${level}: ${message}${formattedMeta}`;
    if (stack) {
      const stackInfo =
        stack instanceof Error ? stack.stack : new Error(stack).stack;
      return `${logMessage}\n${stackInfo}`;
    } else {
      return logMessage;
    }
  }),
);

const commonFileFormat = combine(
  errors({ stack: true }),
  json(),
  prettyPrint(),
  label({
    label: "backend",
  }),
  timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  colorize({
    all: true,
    colors: {
      error: "red",
      warn: "yellow",
      info: "blue",
      debug: "orange",
    },
  }),
);

const logger = createLogger({
  format: commonFormat,
  transports: [
    new transports.Console({
      level: "info",
      format: commonFormat,
    }),
    new winstonDailyRotateFile({
      filename: "./logs/errors/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      level: "error",
      format: commonFileFormat,
      maxFiles: 5,
    }),
    new winstonDailyRotateFile({
      filename: "./logs/combined/combined-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      format: commonFileFormat,
      maxFiles: 10,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: "./logs/exception.log",
      format: commonFileFormat,
    }),
  ],
  rejectionHandlers: [
    new winston.transports.File({
      filename: "./logs/rejections.log",
      format: commonFileFormat,
    }),
  ],
});

export default logger;
