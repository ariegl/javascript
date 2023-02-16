import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Eventos from './components/Eventos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Eventos/>
    </div>
  )
}

export default App
