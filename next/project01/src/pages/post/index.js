import React, { useState,useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"
import GoBack from '@/components/GoBack';

function posts() {
  const router = useRouter();
  const [data,setData] = useState();
  const [loaded,setLoaded] = useState(false);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    setData(posts);
    setLoaded(true);
  }

  useEffect(() => {
    getData();
  },[])

  return (
    <div>
      <GoBack></GoBack>
      {
        loaded ? (
          <div className='flex justify-center items-start flex-wrap'>
            <h1 className='text-4xl text-white font-bold'>Post List</h1>
            {
              data.map((element,index) => (
                <div className='w-full' key={"element-"+index}>
                  <li className='mx-10'>
                    <a onClick={() => router.push(`/post/${element.id}`)} className='cursor-pointer transition-all ease-in-out hover:text-2xl hover:ps-4 delay-0 hover:font-bold hover:translate-x-48'>{element.title}</a>
                  </li>
                </div>
              ))
            }
          </div>
        ) : (
          <h1>Loading....</h1>
        )
      }
    </div>
  )
}

export default posts