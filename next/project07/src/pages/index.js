import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useCounterStore } from '@/store/counterStore'
import shallow from "zustand/shallow"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const values = useCounterStore((state) => ({
    counter: state.count,
    title: state.title,
  }),shallow)


  return (
    <main
      className={`flex flex-wrap min-h-screen w-full content-center justify-center p-24 ${inter.className}`}
    >
      <h1 className='text-4xl w-full text-center'>Counter: {values.counter}</h1>
      <h2>{values.title}</h2>
    </main>
  )
}
