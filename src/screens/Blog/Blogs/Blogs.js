import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import FavouriteContext from "../../../contexts/FavouriteContexts";
import { getBlogs, addBlog } from "../../../library/network/requests/blogs";
import { Bounce } from "react-activity";

import SideBar from "../../../components/navigation/SideBar/SideBar";
import BlogContainer from "../../../components/blogs/BlogContainer";

import styles from "./styles.module.css";
import "react-activity/dist/library.css";

function Blogs() {
  const { userSession, handleLogout } = useContext(AuthContext);
  const { favouritedBlogs, handleFavourite, loading } =
    useContext(FavouriteContext);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [userFavourites, setUserFavourites] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let response = await getBlogs();
      setBlogs(response.data);
    }
    fetchBlogs();
  }, []);

  useEffect(() => {
    setUserFavourites(favouritedBlogs);
  }, [userFavourites, favouritedBlogs]);

  function handleNewBlog(form) {
    const blogData = {
      title: form.title,
      post: form.post,
      author: userSession.username,
      authorId: userSession.id,
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
            .map((blog) => {
              return (
                <BlogContainer
                  key={blog.id}
                  blogData={blog}
                  handleFavourite={handleFavourite}
                  isFavourited={favouritedBlogs.some(
                    (favBlog) => favBlog.id === blog.id
                  )}
                />
              );
            })
        )}
      </div>
    </div>
  );
}

export default Blogs;
