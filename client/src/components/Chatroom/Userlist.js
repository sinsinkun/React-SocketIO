import { Container, List, ListItem, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useStoreContext } from "../GlobalStore";
import { Person as PersonIcon } from "@material-ui/icons";
import Usertab from './Usertab';

function Userlist(props) {

  const [users, setUsers] = useState([]);
  const [showTab, setShowTab] = useState(false);
  const [store] = useStoreContext();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  },[props.refresh])

  async function getUsers() {
    const usersData = await fetch(`/api/users/${store.room}`).then(r => r.json());
    setUsers(usersData);
  }

  function toggleTab() {
    setShowTab(prev => !prev);
  }

  if (store.winX > 960) return(
    <Container className="user-col">
      <Typography variant="h6">User List</Typography>
      <List>
        {users.map(user => {
          return <ListItem>{user.name}</ListItem>
        })}
      </List>
    </Container>
  )
  else return(
    <>
    <Container className="user-col user-btn" onClick={toggleTab}>
      <PersonIcon />
    </Container>
    {showTab ? <Usertab toggleTab={toggleTab} users={users} /> : ""}
    </>
  )
}

export default Userlist;