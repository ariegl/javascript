const names = ['Ariel','Pedro','Juan'];
const newNames = ['Antonio','Leonardo','Gustavo'];


//RECORRER ARREGLO DE FORMA CLASICA
for(let i = 0; i < names.length; i++){
    const name = names[i];
    console.log(name);
}

//RECORRER CON FOREACH
names.forEach(function (name) {
    console.log(name);
});

//RECORRER CON MAP, MAP NO MODIFICA EL ARREGLO ORIGINAL SI NO QUE CREA UNA COPIA
const newArrayNames = names.map(function (element){
    return `Hola ${element}`;
});

console.log(newArrayNames);

//METODO FIND
const nameFind = names.find(function (element){
    if (element === 'Juan') {
        return `Finded: ${element}`;
    }
});

console.log(nameFind);

//METODO FILTER
const nameFilter = names.filter(function (element) {
    if (element !== 'Ariel') {
        return `Filter ${element}`;
    }
});

console.log(nameFilter);

//METODO CONCAT
console.log(names.concat(newNames));