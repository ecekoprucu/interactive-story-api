import { Schema, model, Document, Types } from "mongoose";

export interface Story extends Document {
  title: string;
  description?: string;
  startSceneId: Types.ObjectId;
}

const StorySchema = new Schema<Story>({
  title: { type: String, required: true },
  description: { type: String },
  startSceneId: { type: Schema.Types.ObjectId, ref: "Scene", required: true },
});

const StoryModel = model<Story>("Story", StorySchema);
export default StoryModel;
