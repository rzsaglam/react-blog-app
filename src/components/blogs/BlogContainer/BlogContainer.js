import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function BlogContainer({ blogData }) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/BlogDetail/${blogData.id}`}
    >
      <div className={styles.container}>
        <div className={styles.author}>{blogData.author}</div>
        <div className={styles.title}>{blogData.title}</div>
        <div className={styles.post}>{blogData.post}</div>
      </div>
    </Link>
  );
}

export default BlogContainer;
