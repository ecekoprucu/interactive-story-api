import { Router } from "express";
import {
  createScene,
  getAllScenes,
  getSceneById,
  updateScene,
} from "../controllers/sceneController";
import { requireAdminToken } from "../middleware/auth";

const router = Router();

router.post("/", requireAdminToken, createScene);
router.get("/", getAllScenes);
router.get("/:id", getSceneById);
router.put("/:id", requireAdminToken, updateScene);
router.patch("/:id", requireAdminToken, updateScene);

export default router;
