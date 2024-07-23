import * as dotenv from "dotenv";
import { createError } from "../error.js";
import axios from "axios";
dotenv.config();

// Controller to generate Image

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const result = await axios.post(
      "https://api.aimlapi.com/images/generations",
      {
        prompt: prompt,
        model: "stabilityai/stable-diffusion-xl-base-1.0",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIML_API_KEY}`,
        },
      }
    );
    const generatedImage = result.data.output.choices[0].image_base64;
    return res.status(200).json({ photo: generatedImage });
  } catch (error) {
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error?.message
      )
    );
  }
};
