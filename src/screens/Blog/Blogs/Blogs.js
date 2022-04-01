import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { getBlogs, addBlog } from "../../../library/network/requests/blogs";

import SideBar from "../../../components/navigation/SideBar/SideBar";
import BlogContainer from "../../../components/blogs/BlogContainer";

import styles from "./styles.module.css";

function Blogs() {
  const { userSession, handleLogout } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetch() {
      let response = await getBlogs();
      setBlogs(response.data);
    }
    fetch();
  }, []);

  function handleNewBlog(form) {
    const blogData = {
      title: form.title,
      post: form.post,
      author: userSession.username,
    };
    addBlog(blogData);
  }

  return (
    <div className={styles.container}>
      <SideBar handleLogOut={handleLogout} handleNewBlog={handleNewBlog} />
      <div className={styles.main}>
        {blogs
          .slice()
          .reverse()
          .map((blog, i) => {
            return <BlogContainer key={i} blogData={blog} />;
          })}
      </div>
    </div>
  );
}

export default Blogs;
