const POSTS = [
  {
    id: '1',
    imgSrc:
      'https://play-lh.googleusercontent.com/U6NIqVC_x8N_G-tqX032F0DFsacB78ONVOGMtqwIyZWCaW7YUBJotG_W0pRgEX-Mg_Im',
    title: 'Lol, look at this',
    text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
  },
  {
    id: '2',
    imgSrc:
      'https://www.vakcina.ru/files/tmpfiles/articles-pict/beshenstvo-rabies/rabies-beshenstvo-1.jpg',
    title: 'Kinda Scary',
    text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
  },
  {
    id: '3',
    imgSrc:
      'https://static.life.ru/publications/2020/6/20/950238182202.8622.png',
    title: 'Why is she even here',
    text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
  },
  {
    id: '4',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQil_X1uXqcTfD7F6SjXjvX6RphN8tCL7A9dSX84JAkG51h1KlTCwjyhi23Nm73EcMpekg&usqp=CAU',
    title: 'How to choose?',
    text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
  },
  {
    id: '5',
    imgSrc:
      'https://www.meme-arsenal.com/memes/c1d00307f300f1a8bda429c81732c268.jpg',
    title: 'Hello There',
    text: 'Some text to fill the test post. It may be a really long one so you should put a lorem ipsum here...',
  },
];

const getBy = id => {
  return POSTS.find(post => post.id === id);
};

const newPost = (id, imgSrc, title, text) => ({ id, imgSrc, title, text });

export { POSTS, getBy, newPost };
