import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import BlogContext from "../../../contexts/BlogContext";
import SideBar from "../../../components/navigation/SideBar/SideBar";
import BlogContainer from "../../../components/blogs/BlogContainer";

import styles from "./styles.module.css";

function Blogs() {
  const { userSession, handleLogout } = useContext(AuthContext);
  const { blogs, newBlog } = useContext(BlogContext);

  function handleNewBlog(form) {
    const blogData = {
      title: form.title,
      post: form.post,
      author: userSession.username,
    };
    newBlog(blogData);
  }

  return (
    <div className={styles.container}>
      <SideBar handleLogOut={handleLogout} handleNewBlog={handleNewBlog} />
      <div className={styles.main}>
        {blogs.map((blog, i) => {
          return <BlogContainer key={i} blogData={blog} />;
        })}
      </div>
    </div>
  );
}

export default Blogs;
