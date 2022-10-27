import './styles/Developer.css';

const Developer = ({ className, imgSrc, alt, href, linkTitle }) => {
  return (
    <div className={`${className} developer`}>
      <img className='developer-img' src={imgSrc} alt={alt}></img>
      <a className='developer-name' href={href}>{linkTitle}</a>
    </div>
  );
};

export default Developer;
