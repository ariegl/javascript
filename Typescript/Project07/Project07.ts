//ARRAYS

//Array de un tipo unico
const names: string[] = [];

names.push("ARIEL");
names.push("ARIEL");
names.push("ARIEL");
names.push("ARIEL");

//Array de string's y number's
const planets: (string | number)[] = [];
planets.push("TIERRA");
planets.push(5);
planets.push("MARTE");
planets.push(3);

//Array de objetos propios
const address = {
    planet: "Earth",
    country: "Mexico"
}

type Address = typeof address;

const arrayAddress: Address[] = [];

const secondAddress:Address = {
    planet: "Mars",
    country: "ASDJKL"
}

arrayAddress.push(secondAddress);