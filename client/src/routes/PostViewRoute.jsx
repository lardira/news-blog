import { React, useContext } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import PostView from "../components/PostView.jsx";
import { PostsContext } from "../contexts/PostsContext";

const PostViewRoute = () => {
  const { id } = useParams();
  const { getById } = useContext(PostsContext);

  const found = getById(parseInt(id));
  if (!found) return <NotFound text="Post not found" />;

  return <PostView post={found} />;
};

export default PostViewRoute;
