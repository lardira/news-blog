import './styles/Feed.css';

import PostContainer from './PostContainer';

const Feed = ({ className, posts }) => {
  return (
    <div className={`${className} feed posts-feed`}>
      {posts.map(post => (
        <PostContainer data={post} />
      ))}
    </div>
  );
};

export default Feed;
