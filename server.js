// express server setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// socketIO setup
const http = require('http').Server(app);
const io = require('socket.io')(http);
let onlineUsers = [];
let rooms = ["Lobby"];

// fetch POST handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// fetch user list
app.get('/api/users/:room', (req,res) => {
  console.log("[API GET]: Get user list for room", req.params.room);
  let names = [];
  if (onlineUsers.length > 0) names = onlineUsers.filter(user => user.room === req.params.room);
  res.send(names);
})
// for development
app.get('/api/users', (req,res) => {
  console.log("[API GET]: Get all users list");
  res.send(onlineUsers);
})
// fetch room list
app.get('/api/rooms', (req,res) => {
  console.log("[API GET]: Get room list");
  res.send(rooms);
})

// load built react app
app.use(express.static('./client/build'));
app.get('*', (req, res) => {
  console.log("[HTML GET]: Get React app");
  res.sendFile('./client/build/index.html', {root:"."});
});

// socketIO events
io.on('connection', (socket) => {
  // event: client connects to server
  console.log(`[SocketIO]: user ${socket.id} connected`);
  socket.on("connected", (data) => {
    console.log(`[SocketIO]: connected user: ${data.user}, room: ${data.room}`);
    // add user to onlineUsers
    onlineUsers.push({ id:socket.id, name:data.user, room:data.room });
    socket.join(data.room);
    // send msg to room
    io.to(data.room).emit("msg", { user:"SYS", msg:`> ${data.user} has joined <`});
  });

  // event: client disconnects from server
  socket.on('disconnect', () => {
    console.log(`[SocketIO]: user ${socket.id} disconnected`);
    // remove user from onlineUsers
    for (let i=0; i<onlineUsers.length; i++) {
      if (onlineUsers[i].id === socket.id) {
        // send msg to room
        io.to(onlineUsers[i].room).emit("msg", { user:"SYS", msg:`> ${onlineUsers[i].name} has left <`});
        onlineUsers.splice(i,1);
        break;
      }
    }
  })

  // event: join rooms
  socket.on('join', (data) => {
    console.log(`[SocketIO]: user ${data.user} joined room ${data.room}`);
    socket.join(data.room);
    // update onlineUsers
    const thisUser = onlineUsers.filter(user => user.id === socket.id);
    thisUser.room = data.room;
    // send msg to room
    io.to(data.room).emit("msg", { user:"SYS", msg:`> ${data.user} has joined <`});
  })

  // event: leave rooms
  socket.on('leave', (data) => {
    console.log(`[SocketIO]: user ${data.user} left room ${data.room}`);
    // send msg to room
    io.to(data.room).emit("msg", { user:"SYS", msg:`> ${data.user} has left <`});
  })

  // event: client sends msg
  socket.on('msg', (data) => {
    console.log("[SocketIO]: message from client", data);
    io.to(data.room).emit("msg", { user:data.user, msg:data.msg });
  })
});

// open server
http.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});
