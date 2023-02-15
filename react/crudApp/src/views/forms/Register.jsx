import {useState} from 'react';

export function Register({users}) {

    const estados = [];

    const [user,setUser] = useState('');
    const [age,setAge] = useState(0);
    const [address, setAddress] = useState('');

    function showData() {
        console.log(`usuario: ${user} - edad: ${age} - address: ${address}`)
    }

    return (
        <form>
        <h1>Rellena el formulario</h1>
        <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input onChange={(e) => { setUser(e.target.value) } } id="txtUser" type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Edad</label>
            <input onChange={(e) => { setAge(e.target.value) } } id="txtAge" type="number" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Direccion</label>
            <input onChange={(e) => { setAddress(e.target.value) } } type="text" className="form-control"/>
        </div>
        <button onClick={showData} type="button" className="btn btn-primary">Registrar</button>
        </form>
    )
}