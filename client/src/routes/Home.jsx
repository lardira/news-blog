import React, { useEffect, useState, useContext } from 'react';
import SearchBox from '../components/SearchBox';
import Feed from '../components/Feed';
import Form from '../components/Form';
import { PostsContext } from '../contexts/PostsContext';

const Home = () => {
  const { posts, addPost } = useContext(PostsContext);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchString, setSearchString] = useState('');

  const inputFields = {
    Title: { type: 'text', required: true },
    Text: { type: 'text', required: true },
    Image: { type: 'url', required: true },
  };

  useEffect(() => {
    const lowSearchString = searchString.toLocaleLowerCase();
    setFilteredPosts(
      posts.filter(post =>
        post.title.toLocaleLowerCase().includes(lowSearchString)
      )
    );
  }, [searchString, posts]);

  const onNewPost = event => {
    const title = event.target[0].value;
    const text = event.target[1].value;
    const imgSrc = event.target[2].value;

    addPost({ title, text, imgSrc });
    setSearchString('');
  };

  const onSearch = event => {
    setSearchString(event.target.value);
  };

  return (
    <div className='App'>
      <SearchBox
        placeHolder='Seach here...'
        onSearchHandler={onSearch}
        value={searchString}
      />
      <Form
        formTitle='Create Post'
        inputs={inputFields}
        onSubmit={onNewPost}
        className='new-post-form'
        buttonName='Create'
      />
      <Feed posts={filteredPosts} />
    </div>
  );
};

export default Home;
