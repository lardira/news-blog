import Post from "./Post";

import "./styles/Feed.css";

const Feed = ({ className, posts }) => {
  return (
    <div className="feed-container">
      <div className={`${className || ""} feed`}>
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
