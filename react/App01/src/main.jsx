import React from 'react';
import ReactDom from 'react-dom/client';

const root = ReactDom.createRoot(document.getElementById('root'));

function Greeting() {
    const married = false;

    const myObject = {
        name: 'Ariel',
        age: 23,
        address: {
            country: 'Mexico',
            city: 'ABC',
            street: 'Morelos',
        }
    }

    return ( 
        <div>
            <h1>{ myObject.name }</h1>
            <h2>{ myObject.age }</h2>
            <h3>{ myObject.address.country} - {myObject.address.city} - {myObject.address.street}</h3>
            <h2>{ married ? 'Estoy casado' : 'Estoy solteroski'}</h2>
        </div>
    )
}

function SecondComponent() {
    function sumaNums(num1 = 0, num2 = 0){
        return (
            <h1>La sumas es: {num1 + num2}</h1>
        )
    }

    return (
        <div>{sumaNums(10,15)}</div>
    )
}

root.render(<>
    <Greeting></Greeting>
    <SecondComponent/>
</>)