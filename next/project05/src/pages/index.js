import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  return (
    <div className='bg-gray-700 h-screen flex justify-center items-center'>
      <button onClick={() => {router.push("/login")}} className="bg-yellow-400 mx-3 px-8 py-2 text-black font-bold">Login</button>
      <button onClick={() => {router.push("/signup")}} className="bg-yellow-400 mx-3 px-8 py-2 text-black font-bold">Sign up</button>
    </div>
  )
}
