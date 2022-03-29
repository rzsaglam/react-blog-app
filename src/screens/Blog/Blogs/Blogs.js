import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

function Blogs() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <div>
      Blogs
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Blogs;
