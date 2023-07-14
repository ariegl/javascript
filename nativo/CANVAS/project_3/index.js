let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;
console.log(canvas.width);

//PROPIEDADES
let position = {x: 50, y: 50};
let velocity = {x: 0, y:0};
let acceleration = {x:0, y: 0.5}; //Aceleracion debida a la gravedad

let sizeCharacter = {x:50, y: 50}; //Tamaño del personaje

let groundHeight = 100; //Altura del suelo
let groundPosition = canvas.clientHeight - groundHeight; //Posicion del suelo
let groundColisionCharacter = canvas.clientHeight - groundHeight - sizeCharacter.y; //El personaje colisiona con el suelo

//ACTUALIZACION DEL OBJETO
function updateObject() {
    //actualizar la posicion y la velocidad
    velocity.x = 0;
    //acceleration.x = 5; //VELOCIDAD A LA QUE SE MUEVE EL PERSONAJE

    //BUG ARREGLADO DETECTA LA ULTIMA TECLA PRESIONADA PARA MOVER EL PERSONAJE
    if(keys.a.pressed && keys.d.pressed) {
        if(keys.lastMoveX.key === "a") velocity.x = -5;
        else if(keys.lastMoveX.key === "d") velocity.x = 5;
    } else {
        if(keys.d.pressed) velocity.x = 5;
        else if (keys.a.pressed) velocity.x = -5;
    }

    position.x += velocity.x;
    //velocity.x += acceleration.x; 

    position.y += velocity.y;
    velocity.y += acceleration.y;   

    //deteccion de colision con el suelo
    if (position.y >= groundColisionCharacter) {
        //Ajustar la posicion
        position.y = groundColisionCharacter;
        velocity.y = 0;
        acceleration.y = 0;
    }

    //deteccion de colision izquierda
    if (position.x < 0 ) {
        velocity.x = 0;
        acceleration.x = 0;
        position.x = 0;
    }


}

//FUNCION DE DIBUJO DEL OBJETO EN EL LIENZO
function drawObject() {
    //Borrar el lienzo
    ctx.clearRect(0,0, canvas.width, canvas.clientHeight);

    //Dibujar fondo
    ctx.fillStyle = "rgba(10,0,40,.9)";
    ctx.fillRect(0, 0, canvas.width, canvas.clientHeight);

    //Dibujar el escenario
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, groundPosition, canvas.width, groundHeight);

    //Dibujar el objeto
    ctx.fillStyle = "rgba(255,0,200,1)";
    ctx.fillRect(position.x, position.y, sizeCharacter.x, sizeCharacter.y);
}

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    lastMoveX: {
        key: "",
    }
}

window.addEventListener('keydown',(event) => {
    switch(event.key){
        case 'w':
            (velocity.y === 0) ? velocity.y = -5 : false;
            break;
        case 'a':
            keys.a.pressed = true;
            keys.lastMoveX.key = "a";
            break;
        case 'd':
            keys.d.pressed = true;
            keys.lastMoveX.key = "d";
            break;
    }
})

window.addEventListener('keyup',(event) => {
    switch(event.key){
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
})

//MOVIMIENTO DEL OBJETO CON EL TECLADO

function animate() {
    updateObject();
    drawObject();
    requestAnimationFrame(animate);
}

animate();


