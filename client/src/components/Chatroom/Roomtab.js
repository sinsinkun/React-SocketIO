import { Typography, List, ListItem } from "@material-ui/core";

function Roomtab(props) {

  return(
    <div>
      <div className="room-tab">
        <Typography variant="h6">Room List</Typography>
        <List>
          {props.rooms.map(room => {
            return <ListItem button onClick={e => props.joinRoom(e.target.innerText)}>{room}</ListItem>
          })}
        </List>
      </div>
      <div className="room-tab-bg" onClick={props.toggleTab}></div>
    </div>
  )
}

export default Roomtab;