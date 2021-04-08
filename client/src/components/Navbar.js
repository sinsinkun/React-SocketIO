// import { NavLink } from "react-router-dom";
// import { useStoreContext } from "./GlobalStore";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Menu as MenuIcon, Home as HomeIcon } from '@material-ui/icons';

function Navbar() {

  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={null}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{flexGrow:1}}>
          Socket IM
        </Typography>
        <IconButton edge="end" color="inherit" onClick={null}>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;