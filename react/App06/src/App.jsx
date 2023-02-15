import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const nombre = useRef('Ariel');
  const cuentaRenderizado = useRef(0);
  const botonContadorRef = useRef();

  useEffect( () => {

    //console.log(botonContadorRef.current);

    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }

    console.log(`El contador se actualizo y ahora es:${count}`);

  }, [count]);


  const cambiarNombre = () => {
    nombre.current = 'Juan Gabriel';
    console.log(`El nuevo nombre es ${nombre.current}`);
  }

  return (
    <div className="App">
      <h1>Contador: {count} </h1>
      <button ref={botonContadorRef} onClick={() => setCount(count + 1)}>+1</button>
    
      <br/>

      <h1>Nombre: {nombre.current}</h1>
      <button onClick={cambiarNombre}>cambiar nombre</button>
    </div>
  )
}

export default App
