import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

import SideBar from "../../../components/navigation/SideBar/SideBar";

function BlogDetail() {
  const { id } = useParams();
  const { handleLogout, handleNewBlog } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <SideBar handleLogOut={handleLogout} handleNewBlog={handleNewBlog} />
      <div className={styles.main}></div>
    </div>
  );
}

export default BlogDetail;
