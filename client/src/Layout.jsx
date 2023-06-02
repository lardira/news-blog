import { React, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Developer from "./components/Developer";
import { UserContext } from "./contexts/UserContext";

function Layout() {
  const { user, signOut } = useContext(UserContext);

  return (
    <Fragment>
      <header>
        <nav>
          <Link to="/posts" className="home-button">
            NewsBlog
          </Link>
          {user ? (
            <div className="logged-user-nav-items">
              <Link
                to={`/profiles/${user.id}`}
                className="logged-user-profile-button nav-item"
              >
                {user.login}
              </Link>
              <span className="sign-out-button nav-item" onClick={signOut}>
                Sign Out
              </span>
            </div>
          ) : (
            <Link to="/sign-in" className="sign-in-button nav-item">
              Sign In
            </Link>
          )}
          <Link to="/about" className="about-button nav-item">
            About
          </Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        <span>Developed for portfolio by</span>
        <div className="developers-container">
          <div className="developer-container">
            <Developer
              className="chilledrxn-developer"
              imgSrc="https://avatars.githubusercontent.com/u/55207906?v=1"
              alt=""
              href="https://github.com/Ranmaruru"
              linkTitle="chilledrxn"
            />
          </div>
          <div className="developer-container">
            <Developer
              className="lardira-developer"
              imgSrc="https://avatars.githubusercontent.com/u/78199923?v=1"
              alt=""
              href="https://github.com/lardira"
              linkTitle="lardira"
            />
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Layout;
