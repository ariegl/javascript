//FUNCION QUE RETORNA UNA FUNCION
function hello(){
    return function(){
        return "Hello world";
    }
}

console.log(hello()());

//-------------------------------------------------------

//FUNCIONES CON PARAMETROS
function myFunctionWithParameters(name, country) {
    return 'Aloh ' + name + ' thank you for visiting us from ' + country;
}

console.log(myFunctionWithParameters('Ariel','México'));
console.log(myFunctionWithParameters('Flores','China'));


//FUNCION CON PARAMETROS POR DEFECTO
function defaultParameters(number1 = 20, number2 = 10){
    return 'La suma es: ' + (number1 + number2);
}

console.log(defaultParameters(10,10));


//-------------------------------------------------------


