import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Home as HomeIcon } from '@material-ui/icons';

function Navbar() {

  const winLocation = useHistory();

  function goToMain() { winLocation.push("/") }

  return(
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" style={{flexGrow:1}}>Socket IM</Typography>
        <IconButton edge="end" color="inherit" onClick={goToMain}><HomeIcon /></IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;