const user = {
    name: 'Ariel',
    age: '23',
    address: {
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

console.log(user.address?.cp);