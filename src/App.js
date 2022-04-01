import "./App.css";
import { AuthContextProvider } from "./contexts/AuthContext";

import MainRouter from "./routers/MainRouter";

const App = () => {
  return (
    <AuthContextProvider>
      <MainRouter />
    </AuthContextProvider>
  );
};

export default App;
