import React from "react";
import {
  MdOutlineAccountCircle,
  MdOutlineHome,
  MdOutlineEdit,
} from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import NewBlogModal from "../../modals/NewBlogModal";

function SideBar({
  handleNewBlog,
  handleLogOut,
  handleModal,
  isBlogModalOpen,
}) {
  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <MdOutlineHome size={30} color={"#484848"} />
      </Link>
      <MdOutlineEdit size={30} color={"#484848"} onClick={handleModal} />
      <NewBlogModal
        isOpen={isBlogModalOpen}
        closeModal={handleModal}
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
