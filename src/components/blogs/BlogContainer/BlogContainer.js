import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

function BlogContainer({ blogData, handleFavourite, isFavourited }) {
  const [isFavourite, setIsFavourite] = useState(isFavourited);

  useEffect(() => {
    setIsFavourite(isFavourited);
  }, [isFavourited]);

  return (
    <div className={styles.container}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/BlogDetail/${blogData.id}`}
      >
        <div className={styles.author}>{blogData.author}</div>
        <div className={styles.title}>{blogData.title}</div>
        <div className={styles.post}>{blogData.post}</div>
      </Link>

      <div>
        {isFavourite ? (
          <IoHeart onClick={() => handleFavourite(blogData, isFavourite)} />
        ) : (
          <IoHeartOutline
            onClick={() => handleFavourite(blogData, isFavourite)}
          />
        )}
      </div>
    </div>
  );
}

export default BlogContainer;
