function myTraditionalFunction() {
    return "Hi i'm a traditional function";
}

const arrowFunction = () => {
    return "Hi i'm an arrow function";
}

console.log(myTraditionalFunction());
console.log(arrowFunction());

//INLINE ARROW FUNCTIONS

const myInlineFunction = () => "I'm inline arrow function";
const showNumber = () => 23;
const showBoolean = () => true;
const showArray = () => ['Ariel','Flores','Mexico'];

//RETORNAR OBJETOS
const showObject = () => ({name: 'ariel'});


console.log(myInlineFunction());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject());