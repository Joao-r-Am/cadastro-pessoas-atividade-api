import express, { NextFunction, Request, Response, Router } from "express";
import userRoutes from "./user.routes";
import taskRoutes from "./task.routes";
import { login } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { errorHandler } from "../middlewares/errorHandler.middleware";

const router = Router();
const app = express();

router.get("/health", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(202).json({ message: "app funcionando." });
  } catch (error) {
    next(error);
  }
});

app.use("*", authMiddleware);

router.use("/user", userRoutes);
router.use("/task", taskRoutes);
router.post("/login", login);

export default router;
