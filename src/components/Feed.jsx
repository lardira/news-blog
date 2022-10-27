import './styles/Feed.css';

import Post from './Post';

const Feed = ({ className, posts }) => {
  return (
    <div className='feed-container'>
      <div className={`${className || ''} feed`}>
        {posts.map(post => (
          <Post data={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
