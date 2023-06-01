import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useCounterStore } from '@/store/counterStore'
import {shallow} from "zustand/shallow"
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const values = useCounterStore((state) => ({
    counter: state.count,
    title: state.title,
    posts: state.posts
  }),shallow);

  const {increment, getPost} = useCounterStore();

  useEffect(() => {
    getPost();
  },[])

  return (
    <main
      className={`flex flex-wrap min-h-screen w-full content-center justify-center p-24 ${inter.className}`}
    >
      <h1 className='text-4xl w-full text-center'>Counter: {values.counter}</h1>
      <h2 className='w-full text-center'>{values.title}</h2>
      <button className='bg-slate-400 py-4 px-10 mt-4' onClick={() => {increment(10)}}>INCREMENT</button>

      <hr/>
      {
        JSON.stringify(values.posts)
      }
    </main>
  )
}
