import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import Home from "../screens/Home";
import Blogs from "../screens/Blog/Blogs";

function MainRouter() {
  const { userSession } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {userSession ? (
          <Route path={userSession ? "/" : "blogs"} element={<Blogs />} />
        ) : (
          <Route path={userSession ? "home" : "/"} element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
