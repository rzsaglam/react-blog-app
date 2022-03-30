import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import styles from "./styles.module.css";

function BlogContainer({ blogData }) {
  const post =
    blogData.post.length > 240
      ? blogData.post.slice(0, 240) + "..."
      : blogData.post;
  return (
    <div className={styles.container}>
      <div className={styles.author}>{blogData.author}</div>
      <div className={styles.title}>{blogData.title}</div>
      <div className={styles.post}>{post}</div>
    </div>
  );
}

export default BlogContainer;
