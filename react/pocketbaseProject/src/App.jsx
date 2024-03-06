import { useState } from 'react'
import './App.css'
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';
import About from './views/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='application bg-slate-800 w-screen h-screen flex justify-center items-center text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
