import axios from "axios";

const API_URL = "http://localhost:8080/api/blogs";

export const getBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createBlog = async (blog) => {
  const res = await axios.post(API_URL, blog);
  return res.data;
};
