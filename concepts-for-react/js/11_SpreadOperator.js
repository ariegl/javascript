//IN ARRAYS
const names = ['Ariel','Gustavo','Miguel'];
const names2 = ['Michael','Bruno','Gabriel'];

console.log([...names,...names2]);

//IN OBJECTS

const user = {
    name: 'Ariel',
    lastname: 'Flores',
}

const userAddress = {
    country: 'México',
    street: 'Main street',
}

const newObject = {
    ...user,
    ...userAddress,
}

console.log(newObject);