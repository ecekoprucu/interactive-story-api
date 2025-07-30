import { Request, Response } from "express";
import SceneModel from "../models/Scene";

export const createScene = async (req: Request, res: Response) => {
  try {
    const scene = await SceneModel.create(req.body);
    res.status(201).json(scene);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};

export const getAllScenes = async (req: Request, res: Response) => {
  try {
    const scenes = await SceneModel.find().select("_id text");
    res.json(scenes);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};

export const getSceneById = async (req: Request, res: Response) => {
  try {
    const scene = await SceneModel.findById(req.params.id).populate(
      "choices.nextSceneId"
    );
    if (!scene) return res.status(404).json({ error: "Scene not found" });

    res.json(scene);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};

export const updateScene = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedScene = await SceneModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedScene) {
      return res.status(404).json({ error: "Scene not found" });
    }

    res.json(updatedScene);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};
