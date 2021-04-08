// express server setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// socketIO setup
const http = require('http').Server(app);
const io = require('socket.io')(http);

// fetch POST handling
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
  // event: client connects to server
  console.log('a user connected', socket.id);
  socket.emit("msgex", { user:"SYS", msg:"> Connected to server <"});
  // event: client disconnects from server
  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
  })
  // event: client sends msg
  socket.on('msg', (data) => {
    console.log("ping from client", data);
    socket.emit("msgex", { user:data.user, msg:data.msg });
  })

});

// open server
http.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
