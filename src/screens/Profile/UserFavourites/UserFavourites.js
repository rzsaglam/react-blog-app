import React, { useContext, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import FavouriteContext from "../../../contexts/FavouriteContexts";
import { Bounce } from "react-activity";
import styles from "./styles.module.css";
import "react-activity/dist/library.css";
import SideBar from "../../../components/navigation/SideBar/SideBar";
import BlogContainer from "../../../components/blogs/BlogContainer";

function UserFavourites() {
  const { handleLogout, handleNewBlog } = useContext(AuthContext);
  const { favouritedBlogs, handleFavourite, loading } =
    useContext(FavouriteContext);

  useEffect(() => {
    console.log(favouritedBlogs);
  }, [favouritedBlogs]);

  return (
    <div className={styles.container}>
      <div>
        <SideBar handleLogOut={handleLogout} handleNewBlog={handleNewBlog} />
      </div>
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
          favouritedBlogs
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

export default UserFavourites;
