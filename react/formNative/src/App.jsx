import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processData(form);
  };

  const processData = (data) => {
    for(let clave in data){
      console.log(`CLAVE: ${clave} - VALOR:${data[clave]}`);
    }
  }

  return (
    <div className="App flex justify-center items-center min-h-screen">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center flex-wrap bg-yellow-300 px-5 py-10"
      >
        <div className="flex justify-center items-center flex-wrap">
          <h1 className="w-full text-center text-3xl text-yellow-700 font-bold">Formulario</h1>
          <div className="w-full">
            <input
              type="text"
              name="name"
              id="nombre"
              onChange={handleChange}
              placeholder="Nombre"
              className="block w-full m-2 py-3 px-3"
            />
            <input
              type="text"
              name="lastName"
              id="apellido"
              onChange={handleChange}
              placeholder="Primer apellido"
              className="block w-full m-2 py-3 px-3"
            />
            <input
              type="number"
              name="age"
              id="edad"
              onChange={handleChange}
              placeholder="Edad"
              defaultValue={18}
              className="block w-full m-2 py-3 px-3"
            />
            <select name="country" defaultValue={""} id="pais" onChange={handleChange} className="block w-full m-2 py-3">
              <option value="">Elije tu pais</option>
              <option value="MX">mexico</option>
              <option value="ARG">argentina</option>
              <option value="USA">estados unidos</option>
            </select>
          </div>
          <button className="bg-yellow-500 px-10 py-3 text-white font-bold">ENVIAR</button>
        </div>
      </form>
    </div>
  );
}

export default App;
