let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let imagen = new Image();
imagen.src = './assets/minotauro.jpg';

let x = canvas.width / 2;  // Posición inicial en el centro horizontal del canvas
let y = canvas.height / 2; // Posición inicial en el centro vertical del canvas
const amplitude = 20;     // Amplitud del movimiento de flotación
const frequency = 0.02;   // Frecuencia del movimiento de flotación
let time = 0;             // Variable de tiempo para el movimiento de flotación


function drawObject() {
    //Borrar el lienzo
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //Dibujar fondo
    ctx.fillStyle = "rgba(10,0,40,.9)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Calcula la nueva posición vertical del personaje
    const offsetY = Math.sin(time) * amplitude;
    const newY = y + offsetY;
    
    //Dibujar personaje
    ctx.drawImage(imagen, x, newY, 200, 200);

    // Actualiza la variable de tiempo para el movimiento de flotación
    time += frequency;


}

function animate() {
    drawObject();
    requestAnimationFrame(animate);
}

imagen.addEventListener("load", () => {
    animate();
})


