import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import User from "./components/User";
import { UserProvider } from "./components/UserProvider";

function App() {
  return (
    <div className="App flex flex-wrap min-h-screen w-screen items-center">
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
}

export default App;
