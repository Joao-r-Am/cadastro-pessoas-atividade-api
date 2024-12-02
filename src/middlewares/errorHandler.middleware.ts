import { Request, Response, NextFunction } from "express";

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const statusCode = err.statusCode || 500;
    const message = err.message || "erro interno do servidor.";
    console.error(`[error] ${statusCode}: ${message}`);

    res.status(statusCode).json({
      success: false,
      message,
    });
  } catch (error) {
    next(error);
  }
};
