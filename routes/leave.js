import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addLeave,
  getLeaves,
  totalLeaves,
  leaveDetail,
  updateLeave,
  getEmpLeaves,
} from "../controllers/leaveController.js";

const router = express.Router();

router.post("/add", authMiddleware, addLeave);
router.get("/:id", authMiddleware, getLeaves);
router.get("/empLeave/:id", authMiddleware, getEmpLeaves);
router.get("/", authMiddleware, totalLeaves);
router.get("/details/:id", authMiddleware, leaveDetail);
router.put("/:id", authMiddleware, updateLeave);

export default router;
