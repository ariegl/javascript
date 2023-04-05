import { useState } from 'react'
import './App.css'
import {Router, Link, Route, Switch, useRoute} from "wouter" 
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";


function App() {

  return (
    <div className="App bg-gray-100 h-screen flex justify-center items-start flex-wrap">
      <nav className='w-full bg-gray-700 flex justify-start'>
        <ul className='flex ml-10 py-5 font-bold'>
          <li className=''>
            <Link to="/" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Home</Link>
          </li>
          <li className=''>
            <Link to="/about" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>About</Link>
          </li>
          <li className=''>
            <Link to="/login" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Login</Link>
          </li>
        </ul>
      </nav>
      <div className='w-full h-80 flex justify-center'>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
