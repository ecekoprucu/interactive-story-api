import { Request, Response, NextFunction } from "express";

export const requireAdminToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-admin-token");

  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(403).json({ error: "Forbidden: Admin token required" });
  }

  next();
};
