import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoApp from './components/todoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container w-screen min-w-full min-h-screen bg-black flex justify-center items-center">
      <TodoApp/>
    </div>
  )
}

export default App
