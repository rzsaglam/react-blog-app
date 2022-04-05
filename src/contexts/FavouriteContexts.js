import React, { createContext, useContext, useEffect, useState } from "react";
import { getBlogs, updateBlog } from "../library/network/requests/blogs";
import AuthContext from "./AuthContext";

const FavouriteContext = createContext();

export function FavouriteContextProvider({ children }) {
  const [favouritedBlogs, setFavouritedBlogs] = useState([]);
  const { userSession } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFavs() {
      const blogs = await getBlogs();
      const hasFavouriters = blogs.data.filter((blog) => blog.favourites);
      const userFavourites = hasFavouriters.filter((blog) =>
        blog.favourites.includes(userSession.id)
      );
      setFavouritedBlogs(userFavourites);
      setLoading(false);
    }
    if (userSession !== undefined) {
      setLoading(true);
      getFavs();
    }
  }, [userSession]);

  async function handleFavourite(blog, isFavourited) {
    const blogData = {
      id: blog.id,
      authorId: blog.authorId,
      title: blog.title,
      post: blog.post,
      author: blog.author,
      favourites: isFavourited
        ? blog.favourites.filter((favs) => favs !== userSession.id)
        : [...blog.favourites, userSession.id],
    };
    if (favouritedBlogs.includes(blog)) {
      const _favouritedBlogs = favouritedBlogs.filter(
        (favBlog) => favBlog !== blog
      );
      setFavouritedBlogs(_favouritedBlogs);
    } else {
      const _favouritedBlogs = [...favouritedBlogs, blog];
      setFavouritedBlogs(_favouritedBlogs);
    }
    updateBlog(blog.id, blogData);
  }

  return (
    <FavouriteContext.Provider
      value={{ favouritedBlogs, handleFavourite, loading }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
