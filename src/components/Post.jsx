import './styles/Post.css';

const Post = ({ className, data }) => {
  const { imgSrc, title, text } = data;

  return (
    <div className='post-container'>
      <div className={`${className || ''} post`}>
        <h2>{title}</h2>
        <img src={imgSrc} alt='for post' />
        <p>
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
