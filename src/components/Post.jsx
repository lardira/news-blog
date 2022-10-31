import './styles/Post.css';

const Post = ({ className, data }) => {
  const { imgSrc, title, text } = data;

  return (
    <div className='post-container'>
      <div className={`${className} post`}>
        <h2 className='post-title'>{title}</h2>
        <img className='post-img' src={imgSrc} alt='for post' />
        <div className='post-text'>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
