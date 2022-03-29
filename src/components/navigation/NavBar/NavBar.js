import React, { useState } from "react";
import styles from "./styles.module.css";

import Button from "../../common/Button";

import AuthModal from "../../modals/AuthModal";

function NavBar({ handleRegister, handleLogin }) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.logo}>Blog App</p>
      </div>
      <div className={styles.innerContainer}>
        <span className={styles.link} onClick={() => setIsLoginModalOpen(true)}>
          Sign In
        </span>
        <AuthModal
          isOpen={isLoginModalOpen}
          closeModal={() => setIsLoginModalOpen(false)}
          title={"Log In."}
          handleFormSubmit={(values) => handleLogin(values)}
        />
        <Button onClick={() => setIsRegisterModalOpen(true)}>
          <p>Sign Up</p>
        </Button>
        <AuthModal
          isOpen={isRegisterModalOpen}
          closeModal={() => setIsRegisterModalOpen(false)}
          title={"Join Us."}
          handleFormSubmit={(values) => handleRegister(values)}
        />
      </div>
    </div>
  );
}

export default NavBar;
