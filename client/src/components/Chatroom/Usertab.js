import { List, ListItem, Typography } from "@material-ui/core";

function Usertab(props) {
  return(
    <div>
      <div className="user-tab">
        <Typography variant="h6">User List</Typography>
        <List>
          {props.users.map(user => {
            return <ListItem>{user.name}</ListItem>
          })}
        </List>
      </div>
      <div className="user-tab-bg" onClick={props.toggleTab}></div>
    </div>
  )
}

export default Usertab;