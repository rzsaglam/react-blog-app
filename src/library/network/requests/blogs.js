import { env } from "../env/env";
import { baseService } from "../services/baseService";

export const getBlogs = () => {
  return baseService.get(env.api, "blogs");
};

export const getBlogById = (id) => {
  return baseService.get(env.api, "blogs/" + id);
};

export const addBlog = (blogData) => {
  return baseService.post(env.api, "blogs", blogData);
};

export const updateBlog = (id, blogData) => {
  return baseService.put(env.api, "blogs/" + id, blogData);
};

export const deleteBlogById = (id) => {
  return baseService.delete(env.api, "blogs/" + id);
};
