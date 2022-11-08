import './styles/Post.css';
import { useNavigate } from 'react-router-dom';

const Post = ({ className, data }) => {
  const { imgSrc, title, text, id } = data;
  const navigate = useNavigate();

  const onPostClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className='post-container' onClick={onPostClick}>
      <div className={`${className} post`}>
        <h2 className='post-title'>{title}</h2>
        <img className='post-img' src={imgSrc} alt='N\A' />
        <p className='post-text-container'>
          <span className='post-text'>{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
