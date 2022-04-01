import React, { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import NavBar from "../../components/navigation/NavBar";

function Home() {
  const { handleRegister, handleLogin } = useContext(AuthContext);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleLoginModal() {
    setIsLoginModalOpen((prevState) => !prevState);
  }

  function handleRegisterModal() {
    setIsRegisterModalOpen((prevState) => !prevState);
  }

  return (
    <div>
      <NavBar
        handleRegister={handleRegister}
        handleLogin={handleLogin}
        handleLoginModal={handleLoginModal}
        handleRegisterModal={handleRegisterModal}
        isLoginModalOpen={isLoginModalOpen}
        isRegisterModalOpen={isRegisterModalOpen}
      />
    </div>
  );
}

export default Home;
