import { useState, useEffect, useRef } from 'react'
import './App.css'
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://10.0.8.46:3000/");

function App() {
  const [message,setMessage] = useState("");
  const [historyMessages, setHistoryMessage] = useState([]);
  const messagesReceived = useRef();

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
      setHistoryMessage(oldArray => [...oldArray,message]);
      messagesReceived.current.value += message + "\n";
      console.log("HISTORY MESSAGES FUNCTION:",historyMessages);
    };

    socket.on("mensaje", receivedMessage);

    return () => {
      socket.off("mensaje",receivedMessage);
    };
  },[])

  return (
    <div className="App min-h-screen flex justify-center items-center w-full bg-slate-800 text-white">
      <form className="w-3/4 flex justify-center flex-wrap content-center" action="">
        <h1 className="w-full text-4xl text-center py-4">CHAT DE TEXTO</h1>
        <textarea ref={messagesReceived} cols="12" rows="15" className="w-11/12 bg-slate-900 pb-2 pt-2 pl-2" disabled></textarea>
        <div id="controls" className="w-11/12 flex justify-between my-4">
          <textarea cols="12" rows="3" className='bg-slate-700 py-2 pl-2' style={{width: "89%"}} onChange={handleChange} type="text" value={message}/>
          <button className='bg-gray-200 text-black' style={{width: "9%"}} onClick={handleSubmit}>ENVIAR</button>
        </div>
      </form>
      <br/><br/><br/>
    </div>
  )
}

export default App
