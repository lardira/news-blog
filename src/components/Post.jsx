import './styles/Post.css';

const Post = ({ className, data }) => {
  const { imgSrc, title, text } = data;

  return (
    <div className={`${className} post`}>
      <h2>{title}</h2>
      <img src={imgSrc} alt='post with something to show' />
      <p>
        <span>{text}</span>
      </p>
    </div>
  );
};

export default Post;
