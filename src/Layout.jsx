import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Developer from './components/Developer';

function Layout() {
  return (
    <Fragment>
      <header>
        <Link to='/posts' className='home-button'>
          NewsBlog
        </Link>
        <nav>{/* //TODO: navbar */}</nav>
      </header>

      <Outlet />

      <footer>
        <span>Developed for portfolio by</span>
        <div className='developers-container'>
          <div className='developer-container'>
            <Developer
              className='chilledrxn-developer'
              imgSrc='https://avatars.githubusercontent.com/u/55207906?v=1'
              alt=''
              href='https://github.com/Ranmaruru'
              linkTitle='chilledrxn'
            />
          </div>
          <div className='developer-container'>
            <Developer
              className='lardira-developer'
              imgSrc='https://avatars.githubusercontent.com/u/78199923?v=1'
              alt=''
              href='https://github.com/lardira'
              linkTitle='lardira'
            />
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Layout;