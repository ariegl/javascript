let array_1 = [1,2,3,4,5,6,7,8];
let array_2 = [4,5,8,9];

//MAP - COPIAR UN ARRAY
const array_3 = array_1.map((item) => {return item});
console.log("COPIAR UN ARRAY:",array_3);

//FILTER - FILTRAR UN ARRAY
const array_4 = array_2.filter((item) => item <= 4 || item >= 8 );
console.log("FILTRAR UN ARRAY:",array_4);

//SOME - VERIFICAR SI ALGUN ELEMENTO CUMPLE CON LA CONDICION
const array_5 = array_1.some((item) => item === 5);
console.log("VERIFICAR SI EL ARREGLO CUMPLE UNA CONDICION:",array_5);

//FIND - ENCONTRAR Y RETORNAR EL PRIMER ELEMENTO QUE CUMPLA CON LA CONDICION
const array_6 = array_1.find((item) => item === 5);
console.log("PRIMERA COINCIDENCIA:",array_6);

//REDUCE - REALIZAR OPERACIONES SOBRE UN ARRAY
const array_7 = array_1.reduce((count, element) => count + element, 0);
console.log("REALIZAR OPERACIONES SOBRE UN ARREGLO:",array_7);