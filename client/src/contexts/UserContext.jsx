import { createContext, useEffect, useState } from 'react';
import USERS from '../mock/users';

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  //For mock authentication
  signIn: () => {},
  signUp: () => {},
  signOut: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //For mock authentication
  const [users, setUsers] = useState(USERS);

  const signIn = (login, password) => {
    const found = users.find(u => u.login === login && u.password === password);

    if (found) setUser(found);
    else alert('User was not found');
  };

  const signUp = (login, password, displayName) => {
    const found = users.find(u => u.login === login && u.password === password);

    if (!found)
      setUsers(...users, {
        id: `${users.length + 1}`,
        login,
        password,
        displayName,
        type: 'normal',
      });
    else alert(`User ${login} already exists`);
  };

  const signOut = () => setUser(null);

  const value = {
    user,
    setUser,
    signIn,
    signOut,
    signUp,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
