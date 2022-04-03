import React, { useState } from "react";
import {
  MdOutlineAccountCircle,
  MdOutlineHome,
  MdOutlineEdit,
} from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import NewBlogModal from "../../modals/NewBlogModal";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function SideBar({
  handleNewBlog,
  handleLogOut,
  handleModal,
  isBlogModalOpen,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
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
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        />
      </div>
      <div className={styles.profileMenu}>
        {isMenuOpen && <ProfileMenu handleLogOut={handleLogOut} />}
      </div>
    </>
  );
}

export default SideBar;
