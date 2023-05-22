import Image from 'next/image'
import { Inter } from 'next/font/google'
import BasicSpeedDial from '@/components/BasicSpeedDial';
import BasicTable from '@/components/BasicTable';
import SkeletonTypography from '@/components/SkeletonTypography';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen flex flex-wrap justify-center content-center w-full bg-slate-100'>
      <div className='flex flex-wrap justify-center content-center w-full mb-10 pb-10 pt-4'>
        <div className='container'>
          <h1 className='w-full text-4xl font-bold p-4'>Skeleton Example</h1>
          <SkeletonTypography/>
        </div>
        <BasicSpeedDial/>
      </div>
    </div>
  )
}
