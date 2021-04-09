import { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem } from "@material-ui/core";
import { List as ListIcon } from '@material-ui/icons';
import { useStoreContext } from "../GlobalStore";
import Roomtab from './Roomtab';

function RoomList(props) {

  const [rooms, setRooms] = useState([]);
  const [showTab, setShowTab] = useState(false);
  const [store] = useStoreContext();
  
  useEffect(() => {
    getRooms();
  }, [props.refresh])

  async function getRooms() {
    const roomData = await fetch(`/api/rooms`).then(r => r.json());
    setRooms(roomData);
  }

  function toggleTab() {
    setShowTab(prev => !prev);
  }

  if (store.winX > 960) return(
    <Container className="room-col">
      <Typography variant="h6">Room List</Typography>
      <List>
        {rooms.map(room => {
          return <ListItem button onClick={e => props.joinRoom(e.target.innerText)}>{room}</ListItem>
        })}
      </List>
    </Container>
  )
  else return(
    <>
    <Container className="room-col room-btn" onClick={toggleTab}>
      <ListIcon />  
    </Container>
    {showTab ? <Roomtab toggleTab={toggleTab} rooms={rooms} joinRoom={props.joinRoom}/> : ""}
    </>
  )
} 

export default RoomList;