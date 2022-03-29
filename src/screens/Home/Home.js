import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import NavBar from "../../components/navigation/NavBar";

function Home() {
  const { handleRegister, handleLogin } = useContext(AuthContext);

  return (
    <div>
      <NavBar handleRegister={handleRegister} handleLogin={handleLogin} />
    </div>
  );
}

export default Home;
