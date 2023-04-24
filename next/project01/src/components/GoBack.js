import React from 'react'
import { useRouter } from 'next/router'

function GoBack() {

    const router = useRouter();

  return (
    <div className='mt-4 ms-4'>
        <button className='bg-yellow-400 px-3 py-2' onClick={() => router.back()}>
            GoBack
        </button>
    </div>
  )
}

export default GoBack