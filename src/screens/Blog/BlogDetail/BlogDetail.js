import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../../library/network/requests/blogs";
import { Bounce } from "react-activity";

import styles from "./styles.module.css";
import "react-activity/dist/library.css";

import SideBar from "../../../components/navigation/SideBar/SideBar";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const { handleLogout, handleNewBlog } = useContext(AuthContext);

  useEffect(() => {
    async function fetch() {
      setBlog((await getBlogById(id)).data);
      setLoading(false);
    }
    fetch();
  }, [id]);

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
          <>
            <div className={styles.title}>{blog.title}</div>
            <div className={styles.post}>{blog.post}</div>
            <div className={styles.author}>{blog.author}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
