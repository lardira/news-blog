import './styles/Feed.css';

import Post from './Post';

const Feed = ({ className, posts }) => {
  return (
    <div className='feed-container'>
      <div className={`${className || ''} feed`}>
        {posts.map((post, i) => {
          //reverse order
          const mirroredPost = posts[posts.length - 1 - i];
          return <Post data={mirroredPost} key={mirroredPost.id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
