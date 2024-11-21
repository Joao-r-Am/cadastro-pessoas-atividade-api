"use strict";
import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getOneUser,
} from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/create", authMiddleware, createUser);
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getOneUser);

export default router;
