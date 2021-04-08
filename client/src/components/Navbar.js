import { useHistory } from "react-router-dom";
// import { useStoreContext } from "./GlobalStore";
import { AppBar, Toolbar, Button, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon, Home as HomeIcon } from '@material-ui/icons';

function Navbar() {

  const winLocation = useHistory();

  function goToMain() { winLocation.push("/") }
  function goToChatroom() { winLocation.push("/chatroom") }

  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={null}><MenuIcon /></IconButton>
        <Typography variant="h6" style={{flexGrow:1}}>Socket IM</Typography>
        <Button color="inherit" onClick={goToChatroom}>Chatroom</Button>
        <IconButton edge="end" color="inherit" onClick={goToMain}><HomeIcon /></IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;