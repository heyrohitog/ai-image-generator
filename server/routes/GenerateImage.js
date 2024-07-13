import express from "express";
import { generateImage } from "../controllers/Posts.js";

const router = express.Router();

router.post("/", generateImage);

export default router;
