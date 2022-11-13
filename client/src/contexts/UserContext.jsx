import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({
  user: null,
  setUser: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

    useEffect(() => {
        //TODO: fetch from db
        setUser({
            id: '0',
            accessToken: '',
            displayName: '',
            type: ''
        })
    }, []);

  const value = {
    user,
    setUser
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
