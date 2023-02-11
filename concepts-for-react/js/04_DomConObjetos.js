//MANIPULANDO EL DOM PARA PINTAR ETIQUETAS CON INFORMACION DE OBJETOS
const user = {
    name: 'Ariel',
    lastName: 'Flores',
    age: 23,
    country: 'México',
}

function printUser(user) {
    return `
        <h1>${user.name} ${user.lastName}</h1>
        <h2>${user.age}</h2>
        <h3>${user.country}</h3>
    `;
}

document.body.innerHTML = printUser(user);
