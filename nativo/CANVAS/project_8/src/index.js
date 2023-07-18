import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io("http://192.168.1.77:6789");

socket.on("connect", () => {
  const clientID = socket.id;
  socket.emit("client-id", clientID);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 650;

let imagen = new Image();
imagen.src = "./assets/nerd_astro.png";

class User {
  constructor(name) {
    this.name = name;
    this.positionX = canvas.width / 2; //POSICION INICIAL
    this.positionY = canvas.height / 2;
    this.floating = {
      amplitude: 20, //Amplitud del movimiento de flotación
      frequency: 0.02, // Frecuencia del movimiento de flotación
      time: 0, //Variable de tiempo para el movimiento de flotación
    };
    this.widthImageCharacter = 492 / 4.5;
    this.heightImageCharacter = 641 / 4.5;
    this.moving = {
      //INDICA CUANDO EL PERSONAJE SE ESTA MOVIENDO
      isMoving: false,
      clickX: 0,
      clickY: 0,
      inicioX: this.positionX,
      inicioY: this.positionY,
      initialTime: new Date().getTime(),
      duracion: 1000,
    };
  }
}

let arrayUsers = [];

let userInput = prompt("Ingresa un nombre de usuario");

if (userInput !== null && userInput !== "") {
  //SOCKET CONNECTION
  socket.emit("login", {username: userInput, uID: socket.id});

  socket.on("getUsers",(usersInRoom) => {
    arrayUsers = usersInRoom;
  })


  //JUGADOR #1
  canvas.addEventListener("click", (event) => {
    console.log("clientID:",clientID);
  
    let index = arrayUsers.findIndex((element) => clientID === element.uID);

    console.log(index);
    if(index !== null) {
      console.log(arrayUsers);
      arrayUsers[index].moving.isMoving = true;

      let rect = canvas.getBoundingClientRect();
      arrayUsers[index].moving.clickX =
        event.clientX - rect.left - arrayUsers[index].widthImageCharacter / 2;
      arrayUsers[index].moving.clickY =
        event.clientY - rect.top - arrayUsers[index].heightImageCharacter;
  
      arrayUsers[index].moving.inicioX = arrayUsers[index].positionX;
      arrayUsers[index].moving.inicioY = arrayUsers[index].positionY;
      arrayUsers[index].moving.initialTime = new Date().getTime();
    }else{
      console.log("not found");
    }
    
  });

  // JUGADOR #2
  // Agrega un listener de eventos para el evento contextmenu (click derecho)
  /*
  canvas.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Evita que aparezca el menú contextual por defecto
    console.log("Hiciste clic derecho en el canvas.");

    arrayUsers[1].moving.isMoving = true;

    let rect = canvas.getBoundingClientRect();
    arrayUsers[1].moving.clickX =
      event.clientX - rect.left - arrayUsers[1].widthImageCharacter / 2;
    arrayUsers[1].moving.clickY =
      event.clientY - rect.top - arrayUsers[1].heightImageCharacter;

    arrayUsers[1].moving.inicioX = arrayUsers[1].positionX;
    arrayUsers[1].moving.inicioY = arrayUsers[1].positionY;
    arrayUsers[1].moving.initialTime = new Date().getTime();
  });
  */

function drawObject(element, index) {
  //El usuario ha clickeado en alguna parte del canvas
  if (element.moving.isMoving === true) {
    //Mover personaje
    let tiempoTranscurrido = new Date().getTime() - element.moving.initialTime;
    let porcentajeCompletado = tiempoTranscurrido / element.moving.duracion;

    if (porcentajeCompletado >= 1) {
      // La animación ha terminado
      element.positionX = element.moving.clickX;
      element.positionY = element.moving.clickY;

      //Dibujar personaje
      ctx.drawImage(
        imagen,
        element.positionX,
        element.positionY,
        element.widthImageCharacter,
        element.heightImageCharacter
      );

      element.moving.isMoving = false;
      element.floating.time = 0;
    } else {
      // Calcular la posición actual durante la animación
      element.positionX =
        element.moving.inicioX +
        (element.moving.clickX - element.moving.inicioX) * porcentajeCompletado;
      element.positionY =
        element.moving.inicioY +
        (element.moving.clickY - element.moving.inicioY) * porcentajeCompletado;

      //Dibujar personaje
      ctx.drawImage(
        imagen,
        element.positionX,
        element.positionY,
        element.widthImageCharacter,
        element.heightImageCharacter
      );
    }

    //RENDERIZA EL NOMBRE DEL USUARIO
    ctx.font = "20px Arial";
    ctx.fillStyle = "#dadada";
    ctx.fillText(
      element.name,
      element.positionX + element.widthImageCharacter / 2 - 25,
      element.positionY - 10
    );
  } else {
    // Animacion personaje flotando
    const offsetY =
      Math.sin(element.floating.time) * element.floating.amplitude;
    const newY = element.positionY + offsetY;

    //Dibujar personaje
    ctx.drawImage(
      imagen,
      element.positionX,
      newY,
      element.widthImageCharacter,
      element.heightImageCharacter
    );

    //RENDERIZA EL NOMBRE DEL USUARIO
    ctx.font = "20px Arial";
    ctx.fillStyle = "#dadada";
    ctx.fillText(
      element.name,
      element.positionX + element.widthImageCharacter / 2 - 25,
      newY - 10
    );

    // Actualiza la variable de tiempo para el movimiento de flotación
    element.floating.time += element.floating.frequency;
  }
}

function animate() {
  //Borrar el lienzo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Dibujar fondo
  ctx.fillStyle = "rgba(0,7,60,.9)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //PINTAR USUARIOS
  arrayUsers.forEach((element, index) => {
    drawObject(element, index);
  });

  requestAnimationFrame(animate);
}

imagen.addEventListener("load", () => {
  animate();
});

}

});