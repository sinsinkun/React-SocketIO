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
  const [newRooms, setNewRooms] = useState(true);
  const [newMsgs, setNewMsgs] = useState(true);
  const [newUsers, setNewUsers] = useState(true);
  const [rMsg, setRMsg] = useState(null);
  const [store] = useStoreContext();

  useEffect(() => {
    // if no user, redirect to main
    if (!store.user) winLocation.push("/");
    // establishing socketIO connection
    socket.current = socketIO();
    socket.current.emit("connected", { user:store.user, room:store.room });
    // event: server sent message
    socket.current.on("msg", (data) => setRMsg({...data}) );
    // event: refresh room/user info
    socket.current.on("refreshUsers", () => setNewUsers(prev => !prev));
    socket.current.on("refreshRooms", () => setNewRooms(prev => !prev));
    socket.current.on("refreshMsgs", () => setNewMsgs(prev => !prev));
    // disconnect on component unload
    return () => socket.current.disconnect();
    // eslint-disable-next-line
  },[])

  function joinRoom(room) {
    // leave old room
    socket.current.emit("leave", { user:store.user, room:store.room });
    // join new room
    store.room = room;
    socket.current.emit("join", { user:store.user, room:store.room });
  }

  function sendMsg(msg) {
    if (msg === "") return;
    socket.current.emit("msg", { user:store.user, room:store.room, msg:msg });
  }

  if (store.user) return (
    <Container maxWidth="xl" disableGutters>
      <Grid container spacing={0} fullWidth>
        <Grid item xs={1} md={3} lg={2}><RoomList refresh={newRooms} joinRoom={joinRoom} /></Grid>
        <Grid item xs={10} md={6} lg={8}><MessagesList rMsg={rMsg} refresh={newMsgs} sendMsg={sendMsg} /></Grid>
        <Grid item xs={1} md={3} lg={2}><Userlist refresh={newUsers} /></Grid>
      </Grid>
    </Container>
  )
  else return (
    <Card className="chatroom-card">...</Card>
  )
}

export default Chatroom;