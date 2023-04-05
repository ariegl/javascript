import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "@formio/react";

function App() {
  const [submission, setSubmission] = useState({ data: {} });

  const handleEvent = (submission) => {
    processInfo(submission);
  };

  const processInfo = (info) => {
    let { username, password } = info;

    username === "ariel" && password === "12345"
      ? console.log("LOGIN COMPLETE")
      : console.log("INCORRECTO");
  };

  return (
    <div className="App container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="container w-25">
        <Form
          src="http://localhost:3001/testformiologin"
          submission={submission}
          onHandleEvent={(submission) => {
            handleEvent(submission);
          }}
          options={
            { 
              hide: {  /*OCULTA UN ELEMENTO POR SU NAME API*/
                username: false 
              },
              disabled: {
                disabledtest: true
              }
            }
          }
          loading={(event) => {console.log(event)}}
        />
      </div>
    </div>
  );
}

export default App;
