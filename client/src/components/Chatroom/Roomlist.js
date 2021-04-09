import { Container, Typography, List, ListItem } from "@material-ui/core";
import { List as ListIcon } from '@material-ui/icons';
import { useStoreContext } from "../GlobalStore";

function RoomList() {

  const [store] = useStoreContext();

  if (store.winX > 960) return(
    <Container className="room-col">
      <Typography variant="h6">Room List</Typography>
      <List>
        <ListItem button>{store.room}</ListItem>
        <ListItem button>Other</ListItem>
      </List>
    </Container>
  )
  else return(
    <Container className="room-col">
      <ListIcon />
    </Container>
  )
} 

export default RoomList;