import { Schema, model, Document, Types } from "mongoose";

export interface Choice {
  text: string;
  nextSceneId: Types.ObjectId;
}

export interface Scene extends Document {
  storyId: Types.ObjectId;
  text: string;
  character?: string;
  animation?: string;
  choices: Choice[];
}

const sceneSchema = new Schema<Scene>({
  storyId: { type: Schema.Types.ObjectId, ref: "Story", required: true },
  text: { type: String, required: true },
  character: String,
  animation: String,
  choices: [
    {
      text: { type: String, required: true },
      nextSceneId: {
        type: Schema.Types.ObjectId,
        ref: "Scene",
        required: true,
      },
    },
  ],
});

const SceneModel = model<Scene>("Scene", sceneSchema);
export default SceneModel;
