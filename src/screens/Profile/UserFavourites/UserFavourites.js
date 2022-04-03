import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import styles from "./styles.module.css";

import SideBar from "../../../components/navigation/SideBar/SideBar";

function UserFavourites() {
  const { handleLogout, handleNewBlog } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div>
        <SideBar handleLogOut={handleLogout} handleNewBlog={handleNewBlog} />
      </div>
      <div className={styles.main}></div>
    </div>
  );
}

export default UserFavourites;
