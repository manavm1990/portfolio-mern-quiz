import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export default <T extends z.ZodType<Object>>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
    } catch (e) {
      if (e instanceof z.ZodError) return res.status(400).json(e.format());
    }

    return next();
  };
};
