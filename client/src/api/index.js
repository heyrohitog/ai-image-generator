import axios from "axios";

const API = axios.create({
  baseURL: "https://artist-hu-bhai.onrender.com",
});

export const GetPosts = async () => await API.get("/api/post/");
export const createPost = async (data) => await API.post("/api/post/", data);
export const GenerateAIImage = async (data) =>
  await API.post("/api/generateImage/", data);
