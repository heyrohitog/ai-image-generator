import cors from "cors";
import express from "express";
import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";
import PostRouter from "./routes/Post.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: "true" }));

// error handling

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Default get

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello Potatoes!",
  });
});

// Connect to mongoDB
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("Failed to connect to DB");
      console.error(err);
    });
};

// Function to start the server

const startServer = async () => {
  try {
    connectDB();
    app.listen(8080, () => console.log("Server started successfully!"));
  } catch (error) {
    console.log(error);
  }
};
startServer();
