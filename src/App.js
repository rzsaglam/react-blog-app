import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import { FavouriteContextProvider } from "./contexts/FavouriteContexts";

import MainRouter from "./routers/MainRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <FavouriteContextProvider>
        <MainRouter />
      </FavouriteContextProvider>
    </AuthContextProvider>
  );
};

export default App;
