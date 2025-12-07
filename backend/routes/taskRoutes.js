import express from "express";
import { authenticate } from "../middleware/middleware.js";
import { createTask, getUserTasks } from "../controllers/taskController.js";
const router = express.Router();

router.post("/", authenticate, createTask);
router.get("/", authenticate, getUserTasks);

export default router;
