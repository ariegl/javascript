import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Form } from "react-formio";

function App() {
  const [login, setLogin] = useState(false);

  function handleSubmit(submission) {
    console.log("enviando info");
    setLocalStorage(submission.data.formulario);

  }

  function setLocalStorage(data) {
    localStorage.setItem("datosForm", JSON.stringify(data));
    setLogin(true);
  }

  function handleLogout() {
    localStorage.removeItem("datosForm");
    setLogin(false);
  }

  function verifyLogin() {
    const data = JSON.parse(localStorage.getItem("datosForm"))

    if (data != null && data != "" && data != "undefined"){
      console.log(data);
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {

    const val = verifyLogin();

    console.log(val);

    if(val){
      setLogin(true);
    }else {
      setLogin(false);
    }
  },[login])

  function Formulario() {
    return (
      <form
        action=""
        className="mt-4 mx-auto w-75 p-4 rounded text-white"
        style={{ background: "#53705a" }}
      >
        <h1 className="">Formulario</h1>
        <Form
          src={"http://localhost:3001/users"}
          onSubmit={handleSubmit}
        ></Form>
      </form>
    );
  }

  function Login() {

    const data = JSON.parse(localStorage.getItem("datosForm"));

    return(
      <div className="flex justify-content-center">
        <h1 className="w-100 text-center">Encontrado</h1>
        <p>Bienvenido {data?.nombrecompleto}</p>
        <p>Edad {data?.edad}</p>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      
    )
  }

  return (
    <div className="App container d-flex min-vh-100 min-vw-100 mt-4">
      {login === true ? <Login/> : <Formulario/>}
    </div>
  );
}

export default App;
