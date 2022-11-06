import React from 'react';
import { useParams } from 'react-router-dom';
import { getBy } from '../utils/posts.js';
import NotFound from './NotFound';
import PostView from '../components/PostView.jsx';

const PostViewRoute = () => {
  const { id } = useParams();

  const found = getBy(id);
  if (!found) return <NotFound text='Post not found' />;

  return <PostView post={found} />;
};

export default PostViewRoute;
