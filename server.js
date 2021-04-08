// express server setup
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// socketIO setup
const http = require('http').Server(app);
const io = require('socket.io')(http);

// fetch POST handling
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// load built react app
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
  console.log("[HTML GET]: Get React app");
  res.sendFile('./client/build/index.html', {root:"."});
});

// socketIO events
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.emit('connection', null);
  
  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
  })
});

// open server
http.listen(PORT, () => {
  console.log('listening on port', PORT);
});
