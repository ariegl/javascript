import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrementCount = () => {
    setCount((prevState) => prevState + 1);
  }

  const handleResetCount = () => {
    setCount(0);
  }

  return (
    <div className=''>
      <center>
        <h1 className='text-black my-8'>Cuenta: {count}</h1>
        <Button value="Probar" function={handleIncrementCount}/>
        <Button value="Reiniciar" function={handleResetCount}/>
      </center>
    </div>
  )
}

export default App
