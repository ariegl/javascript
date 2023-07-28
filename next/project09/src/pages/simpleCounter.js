import Image from 'next/image'
import { Inter } from 'next/font/google'
import useBearStore from '@/context/store'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const count = useBearStore((state) => state.bears);
  const increment = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <main className='w-full min-h-screen flex flex-col'>
        <header>
            <Navbar/>
        </header>
        <div
        className={`w-full bg-black flex flex-1 flex-wrap justify-center content-center`}
        >
            <h1 className='text-white text-center text-5xl font-bold w-full'>Count: {count}</h1>
            <button className='bg-gray-300 py-2 px-14 mt-8 mx-2 text-sm' onClick={increment}>CLICK!</button>
            <button className='bg-gray-300 py-2 px-14 mt-8 mx-2 text-sm' onClick={removeAllBears}>RESET!</button>
        </div>
    </main>
  )
}
