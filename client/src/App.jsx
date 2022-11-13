import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './routes/Home';
import PostView from './routes/PostViewRoute';
import NotFound from './routes/NotFound';
import About from './routes/About';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';
import { GlobalProviders } from './contexts/GlobalProviders';

const App = () => {
  return (
    <GlobalProviders>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='/posts' />} />
          <Route path='/posts' element={<Home />} />
          <Route path='/posts/:id' element={<PostView />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </GlobalProviders>
  );
};

export default App;
