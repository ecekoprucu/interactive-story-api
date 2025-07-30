import { Request, Response, NextFunction } from "express";

export const requireAdminToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isDev = process.env.NODE_ENV === "development";
  const token = req.header("x-admin-token");

  if (isDev && token === process.env.ADMIN_TOKEN) {
    return next();
  }

  return res.status(403).json({ error: "Forbidden" });
};
