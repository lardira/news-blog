import SearchBox from './components/SearchBox';
import Feed from './components/Feed';
import Form from './components/Form';
import { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([
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
  ]);

  const newPostFormInputFields = {
    Title: {type: 'text', required: true},
    Text: {type: 'text', required: true},
    Image: {type: 'text', required: true},
  };

  const onNewPost = event => {
    const title = event.target[0].value;
    const text = event.target[1].value;
    const imgSrc = event.target[2].value;

    setPosts([
      ...posts,
      {
        id: posts.length + 1,
        imgSrc,
        title,
        text,
      },
    ]);
  };

  return (
    <div className='App'>
      <SearchBox />
      <Form
        inputs={newPostFormInputFields}
        onSubmit={onNewPost}
        className='new-post-form'
        buttonName='Create'
      />
      <Feed posts={posts} />
    </div>
  );
};

export default App;
