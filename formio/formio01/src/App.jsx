import { useState, useRef, useEffect} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-formio";

function App() {
  const formulario = useRef(null);

  const handleSubmit = (submission) => {
    console.log(submission)

    console.log(formulario.current);
    console.log(formulario.current.formio)

    alert("ENVIADO");
  };

  return (
    <div className="App container d-flex flex-wrap vh-100">
      <div className="m-auto bg-secondary p-3 rounded w-50">
        <h1 className="text-center text-white">FORM.IO</h1>
        <Form
          src={"https://bugzilla.ensenada.gob.mx/api/core/formulario/certificadonopropiedadticket"}
          onSubmit={handleSubmit}
          ref={formulario}
          className={"formulario"}
        ></Form>
      </div>
    </div>
  );
}

export default App;
