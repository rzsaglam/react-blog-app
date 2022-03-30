import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import Home from "../screens/Home";
import BlogRouter from "./BlogRouter";

function MainRouter() {
  const { userSession } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {userSession ? (
          <Route path={userSession ? "*" : "blogs"} element={<BlogRouter />} />
        ) : (
          <Route path={userSession ? "home" : "*"} element={<Home />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
