import React from 'react'

export function Counter({counter, incrementCount, decrementCount}) {

  return (
    <div className="w-2/4 bg-green-400 h-20 flex justify-center items-center flex-nowrap">
        <div className='w-1/6 h-full flex justify-center items-center'>
            <button onClick={decrementCount} className='bg-green-500 w-full h-full'>-</button>
        </div>
        <div className="flex justify-center items-center flex-wrap w-4/6">
            <div className="min-w-full text-center"><span className='font-bold text-2xl'>My Counter</span></div>
            <div className="min-w-full text-center"><span className='text-xl'>{counter}</span></div>
        </div>
        <div className="w-1/6 h-full flex justify-center items-center">
            <button onClick={incrementCount} className='bg-green-500 w-full h-full'>+</button>
        </div>
    </div>
  )
}
