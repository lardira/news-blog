import Developer from './components/Developer';

const Footer = () => {
  return (
    <footer>
      <span>Developed for portfolio by</span>
      <Developer
        className='chilledrxn-developer'
        imgSrc='https://avatars.githubusercontent.com/u/55207906?v=1'
        alt=''
        href='https://github.com/Ranmaruru'
        linkTitle='chilledrxn'
      />
      <Developer
        className='lardira-developer'
        imgSrc='https://avatars.githubusercontent.com/u/78199923?v=1'
        alt=''
        href='https://github.com/lardira'
        linkTitle='lardira'
      />
    </footer>
  );
};

export default Footer;
