import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import PostView from './routes/PostView';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={ <Navigate to='/posts' />} />
        <Route path='/posts' element={<Home />} />
        <Route path='/posts/:id' element={<PostView />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
