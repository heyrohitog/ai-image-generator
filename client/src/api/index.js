import axios from "axios";

const API = axios.create({
  baseURL: "https://artist-hu-bhai.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const createPost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) =>
  await API.post("/api/generateImage/", data);
