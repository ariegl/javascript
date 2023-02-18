import "./App.css";
import { useAlert } from "react-alert";
import { useState } from "react";

function App() {
  const alert = useAlert();

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    
    alert.show("Oh look, an alert!");
  }

  return (
    <div className="App grid grid-cols-1 min-h-screen">
      <div className="flex justify-center items-center">
        <button
          className="bg-green-300 p-4 m-3 font-bold"
          onClick={handleClick}
        >
          Show Alert
        </button>
        <span className={`${isActive ? 'text-green-700' : 'text-gray-700'} text-xl`}>{`Status: ${isActive}`}</span>
      </div>
    </div>
  );
}

export default App;
