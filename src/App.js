import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BlogContextProvider } from "./contexts/BlogContext";

import MainRouter from "./routers/MainRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <MainRouter />
      </BlogContextProvider>
    </AuthContextProvider>
  );
};

export default App;
