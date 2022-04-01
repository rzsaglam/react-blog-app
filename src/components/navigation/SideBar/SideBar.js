import React, { useState } from "react";
import {
  MdOutlineAccountCircle,
  MdOutlineHome,
  MdOutlineEdit,
} from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import NewBlogModal from "../../modals/NewBlogModal";

function SideBar({ handleNewBlog, handleLogOut }) {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <MdOutlineHome size={30} color={"#484848"} />
      </Link>
      <MdOutlineEdit
        size={30}
        color={"#484848"}
        onClick={() => setIsBlogModalOpen(true)}
      />
      <NewBlogModal
        isOpen={isBlogModalOpen}
        closeModal={() => setIsBlogModalOpen(false)}
        handleFormSubmit={(form) => handleNewBlog(form)}
      />
      <MdOutlineAccountCircle
        size={30}
        color={"#484848"}
        onClick={handleLogOut}
      />
    </div>
  );
}

export default SideBar;
