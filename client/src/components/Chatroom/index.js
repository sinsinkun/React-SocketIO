import { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { Card, Container, Grid } from "@material-ui/core";
import socketIO from 'socket.io-client';
import { useStoreContext } from "../GlobalStore";
import MessagesList from './Messageslist';
import RoomList from './Roomlist';
import Userlist from './Userlist';

function Chatroom() {

  const winLocation = useHistory();
  const socket = useRef(null);
  const [res, setRes] = useState(null);
  const [store] = useStoreContext();

  useEffect(() => {
    // if no user, redirect to main
    if (!store.user) winLocation.push("/");
    // establishing socketIO connection
    socket.current = socketIO();
    // event: server sent message
    socket.current.on("msgex", (data) => setRes({...data}) );
    // disconnect on component unload
    return () => socket.current.disconnect();
    // eslint-disable-next-line
  },[])

  function sendMsg(msg) {
    if (msg === "") return;
    socket.current.emit("msg", {user:store.user, msg:msg});
  }

  if (store.user) return (
    <Container maxWidth="xl" disableGutters>
      <Grid container spacing={1} fullWidth>
        <Grid item md={3}><RoomList /></Grid>
        <Grid item xs md={6}><MessagesList res={res} sendMsg={sendMsg} /></Grid>
        <Grid item sm={3} md={3}><Userlist /></Grid>
      </Grid>
    </Container>
  )
  else return (
    <Card className="chatroom-card">...</Card>
  )
}

export default Chatroom;