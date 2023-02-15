import {Register} from '../views/forms/Register'
import { useState } from 'react'

export function Table() {

    const [usuarios,setUsuario] = useState([]);

    return (
        <div className="container text-center  min-vh-100">
            <div className="row align-items-center min-vh-100">
                <div className="col-6">
                    <Register users={usuarios}/>
                </div>
                <div className="col-6 min-vh-100 align-items-start">
                    <div className="mt-4">
                        <h3>usuarios registrados</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}