import React, {useState} from 'react'
import {Form} from "react-formio";

function Login() {

  const [contenido, setContenido] = useState({data:{}})

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-6'>
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