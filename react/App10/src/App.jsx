import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Circle from './components/Circle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Circle></Circle>
    </div>
  )
}

export default App
