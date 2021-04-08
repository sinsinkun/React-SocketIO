import { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';
const ENDPOINT = "http://127.0.0.1:8080";

function SocketClient() {
  
  const [res, setRes] = useState("");

  useEffect(() => {
    // establishing socketIO connection
    const socket = socketClient(ENDPOINT);
    socket.on('connection', () => {
      console.log("received ping from server");
      setRes("echo");
    })
  },[])

  return res;

}

export default SocketClient;