import { useState, useEffect } from 'react'
import './App.css'
import socket from './socket.jsx';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit('message', 'Hello, server!');
  };


  return (
    <div className="App">
      <div>
        <h1>Socket.io Example</h1>
        <button onClick={sendMessage}>Send Message</button>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
