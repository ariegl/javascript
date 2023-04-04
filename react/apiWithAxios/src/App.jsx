import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Nzc2Mzc3NzYsImlhdCI6MTY3NzYwNDE3Niwic3ViIjo3LCJ1YSI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTAuMC4wLjAgU2FmYXJpLzUzNy4zNiJ9.JXni0vLKaS7bg8SHx-vXXljTbkQNdgw6DOg7qrjlCvw";

    axios.get("https://bugzilla.ensenada.gob.mx/api/ficha/list/3", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setDatos(res.data.list_data)
      setLoading(false)
    })
    .catch(error => {
      console.error("error:",error)
    })
  },[])

  if(loading){
    return(
      <div><h2>Cargando</h2></div>
    )
  }

  return (
    <div className="App">
      {datos ? console.log(datos) : false}
      {datos.map((element,index) => (
        <div key={element.idTramite}><h2>indice: {index} - ID: {element.idTramite} - {element.name}</h2></div>
      ))}
    </div>
  )
}

export default App
