import './styles/PostView.css';
import React from 'react';

//maybe use post component with isViewed=true prop
const PostView = ({ post }) => {
  const { title, text, imgSrc } = post;

  return (
    <div className='post-view-container'>
      <div className='post-view'>
        <h1 className='post-view-title'>{title}</h1>
        <img className='post-view-img' src={imgSrc} alt='N\A' />
        <p className='post-view-text-container'>
          <span className='post-view-text'>{text}</span>
        </p>
      </div>
    </div>
  );
};

export default PostView;
