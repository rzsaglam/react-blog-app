import React from "react";

function BlogContainer({ blogData }) {
  return (
    <div>
      {blogData.title}
      {blogData.post}
      {blogData.author}
    </div>
  );
}

export default BlogContainer;
