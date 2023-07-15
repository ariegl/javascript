let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let imagen = new Image();
imagen.src = "./assets/nerd_astro.png";

let x = canvas.width / 2; // Posición inicial en el centro horizontal del canvas
let y = canvas.height / 2; // Posición inicial en el centro vertical del canvas
const amplitude = 20; // Amplitud del movimiento de flotación
const frequency = 0.02; // Frecuencia del movimiento de flotación
let time = 0; // Variable de tiempo para el movimiento de flotación

let widthImageCharacter = 492 / 4.5;
let heightImageCharacter = 641 / 4.5;
let clicked = false;
let clickX = 0;
let clickY = 0;

let inicioX = x;
let inicioY = y;
let tiempoInicio = new Date().getTime();
let duracion = 1000; // Duración de la transición en milisegundos

function drawObject() {
  //Borrar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Dibujar fondo
  ctx.fillStyle = "rgba(0,7,60,.9)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //El usuario ha clickeado en alguna parte del canvas
  if (clicked === true) {
    //Mover personaje
    let tiempoTranscurrido = new Date().getTime() - tiempoInicio;
    let porcentajeCompletado = tiempoTranscurrido / duracion;

    if (porcentajeCompletado >= 1) {
      // La animación ha terminado
      x = clickX;
      y = clickY;

      //Dibujar personaje
      ctx.drawImage(imagen, x, y, widthImageCharacter, heightImageCharacter);

      clicked = false;
      time = 0;
    } else {
      // Calcular la posición actual durante la animación
      x = inicioX + (clickX - inicioX) * porcentajeCompletado;
      y = inicioY + (clickY - inicioY) * porcentajeCompletado;

      //Dibujar personaje
      ctx.drawImage(imagen, x, y, widthImageCharacter, heightImageCharacter);
    }
  } else {
    // Animacion personaje flotando
    const offsetY = Math.sin(time) * amplitude;
    const newY = y + offsetY;

    //Dibujar personaje
    ctx.drawImage(imagen, x, newY, widthImageCharacter, heightImageCharacter);

    // Actualiza la variable de tiempo para el movimiento de flotación
    time += frequency;
  }
}

function animate() {
  drawObject();
  requestAnimationFrame(animate);
}

imagen.addEventListener("load", () => {
  animate();
});

canvas.addEventListener("click", (event) => {
  clicked = true;

  let rect = canvas.getBoundingClientRect();
  clickX = (event.clientX - rect.left) - widthImageCharacter / 2;
  clickY = (event.clientY - rect.top) - heightImageCharacter;

  inicioX = x;
  inicioY = y;
  tiempoInicio = new Date().getTime();

});


