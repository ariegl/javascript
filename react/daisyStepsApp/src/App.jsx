import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Congratulations from "./components/congrats";

function App() {
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);

  const registerElement = useRef();
  const chooseElement = useRef();
  const purchase = useRef();
  const receiveProduct = useRef();
  const btnNext = useRef();

  const nextStep = () => {

    switch(parseInt(count)){
      case 0:
        registerElement.current.classList.add('step-primary');
        break;
      case 1:
        chooseElement.current.classList.add('step-primary');
        break;
      case 2:
        purchase.current.classList.add('step-primary');
        break;
      case 3:
        receiveProduct.current.classList.add('step-primary');
        btnNext.current.classList.add('px-10');
        btnNext.current.innerText = "FINISH";
        break;
      case 4:
        setFinish(true);
        btnNext.current.classList.add('hidden')
        break;
    }
  };

  useEffect(() => {
    nextStep();
  },[count])


  return (
    <div className="App">
      <div className="container flex flex-wrap justify-center min-w-full min-h-screen">
        <div className="container flex flex-wrap justify-center items-center">
          <h1 className="text-4xl text-center font-bold m-auto w-full">
            TAILWIND TEST
          </h1>
          
          {finish ? <Congratulations/> : <button ref={btnNext} onClick={() => setCount(count + 1)} className="btn">Hello daisyUI</button>}
        </div>
        <div className="container flex justify-center items-end mb-8">
          <div>
          <ul className="steps">
            <li ref={registerElement} id="register" className="step step-primary">Register</li>
            <li ref={chooseElement} id="choosePlan" className="step">Choose plan</li>
            <li ref={purchase} id="purchase" className="step">Purchase</li>
            <li ref={receiveProduct} id="receiveProduct" className="step">Receive Product</li>
            
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
