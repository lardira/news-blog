const Developer = ({ className, imgSrc, alt, href, linkTitle }) => {
  return (
    <div className={`${className} developer`}>
      <img className='developer-img' src={imgSrc} alt={alt}></img>
      <a
        className='developer-name'
        rel='noreferrer'
        target='_blank'
        href={href}
      >
        {linkTitle}
      </a>
    </div>
  );
};

export default Developer;
