import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import Feed from './components/Feed';
import Button from './components/Button';

const App = () => {
  //get them from db
  const posts = [
    {
      id: '1',
      imgSrc:
        'https://play-lh.googleusercontent.com/U6NIqVC_x8N_G-tqX032F0DFsacB78ONVOGMtqwIyZWCaW7YUBJotG_W0pRgEX-Mg_Im',
      title: 'Test Title Here',
      text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
    },
    {
      id: '2',
      imgSrc:
        'https://www.vakcina.ru/files/tmpfiles/articles-pict/beshenstvo-rabies/rabies-beshenstvo-1.jpg',
      title: 'Test Title Here',
      text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
    },
    {
      id: '3',
      imgSrc:
        'https://static.life.ru/publications/2020/6/20/950238182202.8622.png',
      title: 'Test Title Here',
      text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
    },
    {
      id: '4',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQil_X1uXqcTfD7F6SjXjvX6RphN8tCL7A9dSX84JAkG51h1KlTCwjyhi23Nm73EcMpekg&usqp=CAU',
      title: 'Test Title Here',
      text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
    },
    {
      id: '5',
      imgSrc:
        'https://www.meme-arsenal.com/memes/c1d00307f300f1a8bda429c81732c268.jpg',
      title: 'Test Title Here',
      text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
    },
  ];

  return (
    <div className='App'>
      <Header />
      <SearchBox />
      <br /> {/* idk how to it differently. maybe css? */}
      <Button text='Create new post' className='create-post-button' />
      <Feed posts={posts} />
      <Footer />
    </div>
  );
};

export default App;
