import React from 'react'
import {Form} from "react-formio";

function Login() {
  return (
    <div>
      <Form src="http://localhost:3001/login"></Form>
    </div>
  )
}

export default Login