import express from 'express';
import {Server as SocketServer} from 'socket.io'
import cors from 'cors'; // Importa cors
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

// Habilita cors
app.use(cors());

// Configura el servidor para escuchar en el puerto 4000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});

// Maneja las conexiones de Socket.io
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Maneja el evento "mensaje" recibido del cliente
  socket.on('message', (data) => {
    console.log('Mensaje recibido: ', data);
    
    // Envía el mensaje a todos los clientes conectados, excepto al remitente
    socket.broadcast.emit('mensaje', data);
  });

  // Maneja el evento "disconnect" cuando el cliente se desconecta
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});