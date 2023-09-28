/*const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');
const wav = require('wav');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const songPath = __dirname + '/in_the_end.mp3';
const songReadStream = fs.createReadStream(songPath);
const songDecoder = new wav.Reader();

songReadStream.pipe(songDecoder);

songDecoder.on('format', (format) => {
  io.on('connection', (socket) => {
    console.log('Cliente conectado');

    io.emit('timestamp', Date.now());

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });

    // Emitir datos de audio mientras se leen desde la canción
    songDecoder.on('data', (chunk) => {
      io.emit('audio', { data: chunk.toJSON().data });
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
*/
  
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "*"
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

const audioFilePath = __dirname+'/in_the_end.mp3';
const audioBuffer = fs.readFileSync(audioFilePath).buffer; // Convertir a ArrayBuffer

let clientsReady = 0;
const totalClients = 2; // Número total de clientes esperados

io.on('connection', (socket) => {
  // Enviar el audio al cliente que se conecta
  socket.emit('audio', audioBuffer, { binary: true });

  // Manejar el mensaje de inicio del cliente
  socket.on('clientReady', () => {
    console.log("CLIENTE LISTO");
    clientsReady++;
    
    // Si todos los clientes están listos, iniciar la reproducción
    if (clientsReady === totalClients) {
        console.log("REPRODUCIENDO");
      io.emit('startPlayback');
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
