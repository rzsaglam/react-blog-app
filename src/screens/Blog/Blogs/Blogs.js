import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { getBlogs, addBlog } from "../../../library/network/requests/blogs";
import { Bounce } from "react-activity";

import SideBar from "../../../components/navigation/SideBar/SideBar";
import BlogContainer from "../../../components/blogs/BlogContainer";

import styles from "./styles.module.css";
import "react-activity/dist/library.css";

function Blogs() {
  const { userSession, handleLogout } = useContext(AuthContext);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetch() {
      let response = await getBlogs();
      setBlogs(response.data);
      setLoading(false);
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
    setIsBlogModalOpen(false);
  }

  function handleBlogModal() {
    setIsBlogModalOpen((prevState) => !prevState);
  }

  return (
    <div className={styles.container}>
      <SideBar
        handleLogOut={handleLogout}
        handleNewBlog={handleNewBlog}
        handleModal={handleBlogModal}
        isBlogModalOpen={isBlogModalOpen}
      />
      <div className={styles.main}>
        {loading ? (
          <Bounce
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              color: "#484848",
            }}
            size={15}
          />
        ) : (
          blogs
            .slice()
            .reverse()
            .map((blog, i) => {
              return <BlogContainer key={i} blogData={blog} />;
            })
        )}
      </div>
    </div>
  );
}

export default Blogs;
