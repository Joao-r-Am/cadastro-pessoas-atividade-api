"use strict";
import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/create/:id", authMiddleware, createTask);
router.get("/:id", authMiddleware, getAllTasks);

export default router;
