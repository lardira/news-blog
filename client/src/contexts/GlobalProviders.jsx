import { PostsProvider } from "./PostsContext";
import { UserProvider } from "./UserContext";

export const GlobalProviders = ({ children }) => {
  return (
    <UserProvider>
      <PostsProvider>{children}</PostsProvider>;
    </UserProvider>
  );
};
