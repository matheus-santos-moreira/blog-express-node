import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors/AppError';

export function handleError(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error: \n${err.message}`,
  });

  next();
}
