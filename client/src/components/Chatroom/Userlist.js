import { Container, List, ListItem, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

function Userlist(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  },[props.refresh])

  async function getUsers() {
    const usersData = await fetch(`/api/users/${props.room}`).then(r => r.json());
    setUsers(usersData);
  }

  return(
    <Container className="user-col">
      <Typography variant="h6">User List</Typography>
      <List>
        {users.map(user => {
          return <ListItem>{user.name}</ListItem>
        })}
      </List>
    </Container>
  )
}

export default Userlist;