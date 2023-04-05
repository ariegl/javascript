import React, {useState} from 'react'
import {Form} from "react-formio";

function Login() {

  const [contenido, setContenido] = useState({data:{}})

  return (
    <div className='bg-gray-700 w-96 flex justify-center items-start flex-wrap'>
      <h1 className='w-full text-center text-white text-5xl font-bold bg-gray-900 py-3'>LOGIN</h1>
      <div className='flex w-80 justify-center text-white font-bold'>
        <Form 
          src="http://localhost:3001/testformiologin"
          submission={contenido}
          onSubmit={(submission) => {
            console.log("DATA ENVIADA:",submission);
          }}
        >

        </Form>
      </div>
    </div>
  )
}

export default Login