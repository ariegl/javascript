import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div>
        <form action="/api/register" method="POST">
          <h1>Sign up</h1>
          <label>user</label>
          <input type="text" className='text-gray-500' placeholder="user" name="username"/>
          <label>password</label>
          <input tpye="password" className='text-gray-500' placeholder="password" name="password"/>
          <button>SEND</button>
        </form>
      </div>
      <div>
        <form action="/api/login" method="POST">
          <h1>Login</h1>
          <label>user</label>
          <input type="text" className='text-gray-500' placeholder="user" name="username"/>
          <label>password</label>
          <input tpye="password" className='text-gray-500' placeholder="password" name="password"/>
          <button>SEND</button>
        </form>
      </div>
    </div>
  )
}
