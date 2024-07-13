import express from "express";
import { createPost, getAllPosts } from "../controllers/Posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/",getAllPosts)

export default router;
