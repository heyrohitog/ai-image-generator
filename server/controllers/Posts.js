import Post from "../models/Posts";
import * as dotenv from "dotenv";
import { createError } from "../error";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// cloudinary.config({
//     cloud_name: 'dr7zd90rp',
//     api_key: '873496743952664',
//     api_secret: '<your_api_secret>' // Click 'View Credentials' below to copy your API secret
// });

// Get all posts

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    next(
      createError.status,
      error?.response?.data?.error?.message || error?.message
    );
  }
};
