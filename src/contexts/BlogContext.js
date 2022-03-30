import React, { createContext, useEffect, useState } from "react";
import {
  addBlog,
  deleteBlogById,
  getBlogById,
  getBlogs,
  updateBlog,
} from "../library/network/requests/blogs";

const BlogContext = createContext();

export function BlogContextProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState();

  async function getAllBlogs() {
    const blogsData = await getBlogs();
    setBlogs(blogsData.data);
  }

  async function getBlog(id) {
    const blogData = await getBlogById(id);
    setBlog(blogData.data);
  }

  async function newBlog(blogData) {
    const response = await addBlog(blogData);
    if (response.status === 201) {
      setBlogs([...blogs, response.data]);
    }
  }

  async function blogUpdate(blogData) {
    const response = await updateBlog(blogData);
    if (response.status === 200) {
      setBlogs([...blogs, response.data]);
    }
  }

  async function deleteBlog(id) {
    const response = await deleteBlogById(id);
    if (response.status === 200) {
      setBlogs([blogs.filter((blog) => blog.id !== id)]);
    }
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        blog,
        getAllBlogs,
        getBlog,
        newBlog,
        blogUpdate,
        deleteBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
