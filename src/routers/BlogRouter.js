import { Routes, Route } from "react-router-dom";

import Blogs from "../screens/Blog/Blogs";
import BlogDetail from "../screens/Blog/BlogDetail";
import BlogEdit from "../screens/Blog/BlogEdit";

function BlogRouter() {
  return (
    <Routes>
      <Route path="*" element={<Blogs />} />
      <Route path="/BlogDetail/:id" element={<BlogDetail />} />
      <Route path="/BlogEdit" element={<BlogEdit />} />
    </Routes>
  );
}

export default BlogRouter;
