import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const globalError = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message || "Something went wrong",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
