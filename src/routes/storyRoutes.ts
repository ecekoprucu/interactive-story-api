import { Router } from "express";
import { createStory, getStoryById } from "../controllers/storyController";
import { requireAdminToken } from "../middleware/auth";

const router = Router();

router.post("/", requireAdminToken, createStory);
router.get("/:id", getStoryById);

export default router;
