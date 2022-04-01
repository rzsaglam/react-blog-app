import React from "react";
import styles from "./styles.module.css";

import Button from "../../common/Button";

import AuthModal from "../../modals/AuthModal";

function NavBar({
  handleRegister,
  handleLogin,
  handleLoginModal,
  handleRegisterModal,
  isLoginModalOpen,
  isRegisterModalOpen,
}) {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.logo}>Blog App</p>
      </div>
      <div className={styles.innerContainer}>
        <p className={styles.link} onClick={handleLoginModal}>
          Sign In
        </p>
        <AuthModal
          isOpen={isLoginModalOpen}
          closeModal={handleLoginModal}
          title={"Log In."}
          handleFormSubmit={(values) => handleLogin(values)}
        />
        <Button onClick={handleRegisterModal}>
          <p>Sign Up</p>
        </Button>
        <AuthModal
          isOpen={isRegisterModalOpen}
          closeModal={handleRegisterModal}
          title={"Join Us."}
          handleFormSubmit={(values) => handleRegister(values)}
        />
      </div>
    </div>
  );
}

export default NavBar;
