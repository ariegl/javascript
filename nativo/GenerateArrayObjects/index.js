let names = ["Juan","José Luis","José","María Guadalupe","Francisco","Guadalupe","María","Juana","Antonio","Jesús","Miguel Ángel","Pedro","Alejandro","Manuel","Margarita","María del Carmen","Roberto","Fernando","Daniel","Carlos","Jorge","Ricardo","Miguel","Eduardo"];

let users = [];


function generateUser() {
    let max = names.length;
    let min = 0;

    let num = Math.floor(Math.random() * (max - min) + min);
    let nameGen = names[num];
    
    names.splice(num,1);

    let password = "123";
    let email = nameGen + "@gmail.com";
    let phone = "646-123-1234";

    let object = {
        username: nameGen,
        password: password,
        email: email,
        phone: phone,
        __v: 0
    }

    return object;
}

for(i=1; i <= 6; i++) {
    let object = generateUser();

    users.push(object);
    console.log("SE HA GENERADO");
}

console.log(users);
console.log(names);
