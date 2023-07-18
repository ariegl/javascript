import express from 'express';
import {Server as SocketServer} from 'socket.io'
import cors from 'cors'; // Importa cors
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "*"
    }
})

// Habilita cors
app.use(cors());

// CONFIGURACION 192.168.1.89
const serverPort = 6789;
const ipAddress = "192.168.1.77"; //!!CAMBIAR PARA QUE OTROS DISPOSITIVOS DE LA RED PUEDAN ACCEDER


// Configura el servidor para escuchar en el puerto especificado
server.listen(serverPort, ipAddress, () => {
    console.log('Servidor escuchando en http://'+ipAddress);
  });


//USER CLASS
class User {
  constructor(uID, name) {
    this.uID = uID;
    this.name = name;
    this.positionX = 700 / 2; //POSICION INICIAL
    this.positionY = 700 / 2;
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

let usersInRoom = [];





  // Maneja las conexiones de Socket.io
io.on('connection', (socket) => {

    //AGREGAMOS AL USUARIO A LA LISTA DE USUARIOS EN LA SALA
    console.log('Un cliente se ha conectado');

    socket.on("client-id", (uID) => {
      console.log("CLIENT ID",uID);
      let user = new User(uID, '');
      usersInRoom.push(user);

      socket.on("login", (data) => {
        console.log("RECIBIDO:",data);
    
        const objeto = usersInRoom.find((element) => data.uID === element.uID);
    
        if(objeto) {

          objeto.name = data.username;
          io.emit("getUsers",usersInRoom);
          console.log("complete");
        }
      })
    
    })

    // Maneja el evento "mensaje" recibido del cliente
    socket.on('message', (data) => {
      console.log('Mensaje recibido: ', data);
      
      // Envía el mensaje a todos los clientes conectados, excepto al remitente
        //socket.broadcast.emit('mensaje', data);
      
      // Envía el mensaje a todos los clientes
      io.emit('msgFromServer', {texto: "Hola desde el servidor"});
    });
  
    // Maneja el evento "disconnect" cuando el cliente se desconecta
    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado');
    });
  });