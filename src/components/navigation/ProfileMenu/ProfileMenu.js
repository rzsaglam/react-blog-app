import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function ProfileMenu({ handleLogOut }) {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to="/UserBlogs">
        Blogs
      </Link>
      <Link className={styles.link} to="/UserFavourites">
        Favourites
      </Link>
      <button className={styles.link} onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}

export default ProfileMenu;
