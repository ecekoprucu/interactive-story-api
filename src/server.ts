import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import storyRoutes from "./routes/storyRoutes";
import sceneRoutes from "./routes/sceneRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/stories", storyRoutes);
app.use("/api/scenes", sceneRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
