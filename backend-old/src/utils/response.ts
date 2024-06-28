import { Express, Request, Response } from "express";

import config from "./enums";

const successResponse = (
  res: Response,
  data: any,
  message = config.RESPONSE_MESSAGE.SUCCESS,
) => {
  res.status(config.RESPONSE_STATUS.SUCCESS).json({
    status: config.RESPONSE_STATUS.SUCCESS,
    message,
    data,
  });
};

const internalServerError = (
  res: Response,
  message = config.RESPONSE_MESSAGE.INTERNAL_ERROR,
  error = null,
) => {
  res.status(config.RESPONSE_STATUS.INTERNAL_ERROR).json({
    status: config.RESPONSE_STATUS.INTERNAL_ERROR,
    message,
    error,
  });
};

const unauthorizedResponse = (
  res: Response,
  message = config.RESPONSE_MESSAGE.UNAUTHORIZED,
) => {
  res.status(config.RESPONSE_STATUS.UNAUTHORIZED).json({
    status: config.RESPONSE_STATUS.UNAUTHORIZED,
    message,
  });
};

const badRequestResponse = (
  res: Response,
  message = config.RESPONSE_MESSAGE.BAD_REQUEST,
) => {
  res.status(config.RESPONSE_STATUS.BAD_REQUEST).json({
    status: config.RESPONSE_STATUS.BAD_REQUEST,
    message,
  });
};

const notFoundResponse = (
  res: Response,
  message = config.RESPONSE_MESSAGE.NOT_FOUND,
) => {
  res.status(config.RESPONSE_STATUS.NOT_FOUND).json({
    status: config.RESPONSE_STATUS.NOT_FOUND,
    message,
  });
};

const forbiddenResponse = (
  res: Response,
  message = config.RESPONSE_MESSAGE.FORBIDDEN,
) => {
  res.status(config.RESPONSE_STATUS.FORBIDDEN).json({
    status: config.RESPONSE_STATUS.FORBIDDEN,
    message,
  });
};

const unprocessableEntity = (
  res: Response,
  message = config.RESPONSE_MESSAGE.UNPROCESSABLE_ENTITY,
) => {
  res.status(config.RESPONSE_STATUS.UNPROCESSABLE_ENTITY).json({
    status: config.RESPONSE_STATUS.UNPROCESSABLE_ENTITY,
    message,
  });
};

const RESPONSES = {
  successResponse,
  internalServerError,
  unauthorizedResponse,
  badRequestResponse,
  notFoundResponse,
  forbiddenResponse,
  unprocessableEntity,
};

export default RESPONSES;
