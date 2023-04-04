import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [load, setLoad] = useState(false)
  const [fichas, setFichas] = useState([])

  const getData = async() => {
    const res = await fetch("http://127.0.0.1:5000/fichas")

    const data = await res.json();
    console.log(data.fichas);
    setFichas(data.fichas);
    setLoad(true)
  }


  useEffect(() => {

    getData();
  },[])

  return (
    <div className="App grid grid-cols-1 h-screen flex justify-center items-center">
      <div className='flex justify-center flex-wrap'>
        {
          load ? (
            fichas.map((ficha, index) => (
              <div className='min-w-full flex justify-start' key={ficha.id}><div className='bg-green-500 mx-20 my-4 p-4'><h3 className='font-bold'>Ficha #{ficha.id}</h3><h4>{ficha.nombre}</h4></div></div>
            ))
          ) : (
            <div><h3>Cargando...</h3></div>
          )
        }
      </div>
    </div>
  )
}

export default App
