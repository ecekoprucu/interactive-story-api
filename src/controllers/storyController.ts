import { Request, Response } from "express";
import StoryModel from "../models/Story";

export const createStory = async (req: Request, res: Response) => {
  try {
    const story = await StoryModel.create(req.body);
    res.status(201).json(story);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};

export const getStoryById = async (req: Request, res: Response) => {
  try {
    const story = await StoryModel.findById(req.params.id).populate(
      "startSceneId"
    );
    if (!story) return res.status(404).json({ error: "Story not found" });

    res.json(story);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};
