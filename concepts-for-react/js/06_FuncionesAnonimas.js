//FUNCION ANONIMA AUTOEJECUTABLE
console.log(function(){
    return "Hi i'm an anonymous function ";
}());

//WITH DOM MANIPULATION
const message = document.createElement('h1');

message.innerText = function(){
    return "Hi i'm an anonymous function ";
}();

document.body.append(message);