import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addSalary, getSalary, totalSalary } from "../controllers/salaryController.js";

const router = express.Router();

router.post("/add", authMiddleware, addSalary);
router.get("/:id", authMiddleware, getSalary);
router.get("/", authMiddleware, totalSalary);

export default router;
