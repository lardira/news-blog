import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext({
  posts: [],
  addPost: () => {},
  getById: () => null,
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //TODO: lazy loading
    const fetchPosts = async () => {
      const response = await fetch("/posts", { method: "GET" });
      const postsBody = await response.json();
      const postsRecieved = postsBody.map((post) => {
        return {
          id: post.id,
          imgSrc: post.image,
          title: post.title,
          text: post.text,
        };
      });
      setPosts(postsRecieved);
    };

    fetchPosts().catch(console.error);
  }, []);

  const addPost = (newPost) => {
    const addPost = async () => {
      const { title, text, imgSrc } = newPost;

      const response = await fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          text,
          image: imgSrc,
        }),
      });

      const created = await response.json();
      console.log(created);

      setPosts([
        ...posts,
        {
          id: created.id,
          imgSrc: created.image,
          title: created.title,
          text: created.text,
        },
      ]);
    };

    addPost().catch(console.error);
  };

  const removePost = (id) => {
    const deletePost = async () => {
      const response = await fetch(`/posts/${id}`, { method: "DELETE" });
      console.log(response);
      setPosts(posts.filter((post) => post.id !== id));
    };

    deletePost().catch(console.error);
  };

  const getById = (id) => {
    return posts.find((post) => post.id === id);
  };

  const value = {
    posts,
    addPost,
    removePost,
    getById,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
