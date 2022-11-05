import './styles/PostView.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import { getBy } from '../utils/posts.js';

function PostView() {
  const { id } = useParams();

  const found = getBy(id);
  if (!found) return <NotFound text='Post not found' />;

  const { title, text, imgSrc } = found;

  return (
    <div className='post-view-container'>
      <div className='post-view'>
        <h1 className='post-view-title post-title'>{title}</h1>
        <img className='post-view-img post-img' src={imgSrc} alt='N\A' />
        <p className='post-view-text-container'>
          <span className='post-view-text post-text'>{text}</span>
        </p>
      </div>
    </div>
  );
}

export default PostView;
