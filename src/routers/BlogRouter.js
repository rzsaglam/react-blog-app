import { Routes, Route } from "react-router-dom";

import Blogs from "../screens/Blog/Blogs";
import BlogDetail from "../screens/Blog/BlogDetail";
import BlogEdit from "../screens/Blog/BlogEdit";

import UserBlogs from "../screens/Profile/UserBlogs";
import UserFavourites from "../screens/Profile/UserFavourites";

function BlogRouter() {
  return (
    <Routes>
      <Route path="*" element={<Blogs />} />
      <Route path="/BlogDetail/:id" element={<BlogDetail />} />
      <Route path="/BlogEdit" element={<BlogEdit />} />
      <Route path="/UserBlogs" element={<UserBlogs />} />
      <Route path="/UserFavourites" element={<UserFavourites />} />
    </Routes>
  );
}

export default BlogRouter;
