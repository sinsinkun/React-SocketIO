import { useState, useEffect, useRef } from 'react';
import { Card, Typography, Button } from "@material-ui/core";
import socketIO from 'socket.io-client';

function Chatroom() {

  const socket = useRef(null);
  const [res, setRes] = useState("");

  useEffect(() => {
    // establishing socketIO connection
    socket.current = socketIO();
    // event: server sent connection confirmation
    socket.current.on('connection', (data) => {
      console.log("received ping from server");
      setRes(data);
    })
    // event: server sent message
    socket.current.on("msgex", (data) => {
      setRes(data);
    })
    
    // disconnect on component unload
    return () => socket.current.disconnect();
  },[])

  function sendMsg() {
    console.log("send message to server");
    socket.current.emit("msg", "sending message");
  }

  return(
    <Card className="chatroom-card">
      <Typography>Chat</Typography>
      <Button variant="contained" onClick={sendMsg} color="primary">Send message to server</Button>
      <Typography>{res}</Typography>
    </Card>
  )
}

export default Chatroom;