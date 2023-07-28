import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  const handleRedirect = (event) => {
    const path = event.target.id;

    switch(path) {
      case "counter":
        router.push("/simpleCounter");
        break;
      case "example":
        router.push("/example");
        break;
      default:
        router.push("/notfound");
        console.log("NOT FOUND");
    }
  }

  return (
    <main className={`w-full min-h-screen bg-black flex flex-col`}>
      <div>
        <ul>
          <li>
            <h3 className='text-white px-4 py-2 font-bold'>Ariel</h3>
          </li>
        </ul>
      </div>
      <div className={`w-full bg-black flex flex-1 flex-wrap justify-center content-center`}>
        <h1  className='text-white text-center text-5xl font-bold w-full my-3'>WELCOME</h1>
        <div>
          <button id="counter" className='text-white bg-green-400 px-10 py-2 mt-4 mx-1' onClick={handleRedirect}>COUNTER</button>
          <button id="example" className='text-white bg-green-400 px-10 py-2 mt-4 mx-1' onClick={handleRedirect}>EXAMPLE</button>
        </div>
      </div>
    </main>
  )
}
