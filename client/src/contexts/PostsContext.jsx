import { createContext, useEffect, useState } from 'react';
import POSTS from '../mock/posts';

export const PostsContext = createContext({
  posts: [],
  addPost: () => {},
  getById: () => null,
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //TODO: fetch from db, now is mock data
    setPosts(POSTS);
  }, []);

  const addPost = newPost => {
    setPosts([...posts, { ...newPost, id: `${posts.length + 1}` }]);
  };

  const removePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const getById = id => {
    return posts.find(post => post.id === id);
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
