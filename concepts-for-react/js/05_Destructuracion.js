//OBJETOS
const user = {
    name: 'Ariel',
    age: '23',
    addres: {
        country: 'México',
        city: 'Nuevo leon',
        street: 'Avenida morelos',
    },
    hobbies: ['Programming','Play the guitar','Play basketball'],
    active: true,
    sendMail: function() {
        return 'Seending email...';
    }
}


//DESTRUCTURING IN FUNCTION ARGUMENT
function printUserName({name}) {
    return `<h1>Hi my name is ${name}</h1>`;
}

//DESTRUCTURING IN FUNCTION BODY
function printUser(user) {
    const {name, age} = user;

    return `<h1>My name is ${name} and i'm ${age} years old</h1>`;
}

document.body.innerHTML = printUser(user);