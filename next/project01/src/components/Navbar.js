import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'

function Navbar() {

    const router = useRouter();
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <a onClick={() => router.push('/')}>Home</a>
                </li>
                <li>
                    <a onClick={() => router.push('/post')}>Post's</a>
                </li>
                <li>
                    <a onClick={() => router.push('/about')}>About</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar