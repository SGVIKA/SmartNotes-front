import { useState } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/index";

export default function App() {
  
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
}
