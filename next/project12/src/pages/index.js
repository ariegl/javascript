import Image from 'next/image'
import { Inter } from 'next/font/google'
import CustomComponent from '@/components/CustomComponent'
import { CustomProvider } from '@/providers/CustomProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <CustomProvider>
        <CustomComponent/>
      </CustomProvider>
    </main>
  )
}
