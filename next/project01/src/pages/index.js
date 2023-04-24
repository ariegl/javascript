import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { MongoClient } from 'mongodb'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <h1>Main page</h1>
      <div>
        <Navbar/>
      </div>
    </div>
  )
}
