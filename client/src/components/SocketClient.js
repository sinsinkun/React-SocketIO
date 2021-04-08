import { useState, useEffect } from 'react';
import socketClient from 'socket.io-client';

function SocketClient() {
  
  const [res, setRes] = useState("");

  useEffect(() => {
    // establishing socketIO connection
    const socket = socketClient();
    socket.on('connection', (data) => {
      console.log("received ping from server");
      setRes(data);
    })
    
    // disconnect on component unload
    return () => socket.disconnect();
  },[])

  return res;

}

export default SocketClient;