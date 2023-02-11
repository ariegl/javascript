//CREATE ELEMENTS AND APPEND IN DOCUMENT
const title = document.createElement('h1');
title.innerText = 'Hello World From JS';

const button = document.createElement('button');
button.innerText = 'My Button';

document.body.append(title);
document.body.append(button);

//EVENT HANDLERS

button.addEventListener('click',function() {
    console.log("Hello Click");
    title.innerText = "Actualizado con el click";
});