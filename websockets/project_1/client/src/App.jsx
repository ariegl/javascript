import { useState, useEffect } from 'react'
import './App.css'
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:3000/");

function App() {
  const [message,setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit("message",message);
    setMessage("");
  }

  useEffect(() => {
    const receivedMessage = (message) => {
      console.log(message);
    };

    socket.on("mensaje", receivedMessage);

    return () => {
      socket.off("mensaje",receivedMessage);
    };
  },[])

  return (
    <div className="App">
      <form action="">
        <h1>CHAT DE TEXTO</h1>
        <input onChange={handleChange} type="text" value={message}/>
        <button onClick={handleSubmit}>ENVIAR</button>
      </form>
      <br/><br/><br/>
      <h1>MENSAJE:</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
