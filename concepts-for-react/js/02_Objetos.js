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

console.log(user.sendMail());

//------------------------------------------------------------

//SHORTHAND PROPERTY NAMES
const name = 'laptop';
const price = 3000;

const newProduct = {
    name,
    price,
}

console.log(newProduct);