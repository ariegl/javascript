let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

function dibujarElemento(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  ctx.fillRect(x, y, 50, 50); // Dibujar un rectángulo en la posición (x, y)
}

var x = 100; // Posición inicial en X
var y = 100; // Posición inicial en Y

dibujarElemento(x, y); // Dibujar el elemento inicialmente

canvas.addEventListener("click", function (event) {
    console.log("click in canvas")
  var rect = canvas.getBoundingClientRect();
  var clickX = (event.clientX - rect.left) - 50/2; //50 dividido entre 2 para que el puntero quede centrado
  var clickY = (event.clientY - rect.top) - 50/2;

    animarTransicion(clickX, clickY);
  
});

function animarTransicion(nuevaX, nuevaY) {
  var inicioX = x;
  var inicioY = y;
  var tiempoInicio = new Date().getTime();
  var duracion = 1000; // Duración de la transición en milisegundos

  function animacionLoop() {
    console.log("time:",new Date().getTime());
    var tiempoTranscurrido = new Date().getTime() - tiempoInicio;
    var porcentajeCompletado = tiempoTranscurrido / duracion;

    if (porcentajeCompletado >= 1) {
      // La animación ha terminado
      x = nuevaX;
      y = nuevaY;
      dibujarElemento(x, y);
    } else {
      // Calcular la posición actual durante la animación
      x = inicioX + (nuevaX - inicioX) * porcentajeCompletado;
      y = inicioY + (nuevaY - inicioY) * porcentajeCompletado;
      dibujarElemento(x, y);

      // Continuar animando en el siguiente cuadro de animación
      requestAnimationFrame(animacionLoop);
    }
  }

  animacionLoop();
}
