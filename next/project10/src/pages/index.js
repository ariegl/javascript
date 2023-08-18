import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount((prevState) => prevState + 1);
  }

  const handleResetCount = () => {
    setCount(0);
  }

  return(
    <div className='flex justify-center items-center'>
      <center>
        <h1 className='text-black my-8 text-5xl'>Cuenta: {count}</h1>
        <Button value="Probar" function={handleIncrementCount}/>
        <Button value="Reiniciar" function={handleResetCount}/>
      </center>
    </div>
  )
}
