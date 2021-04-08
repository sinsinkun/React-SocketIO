import { Container, Paper, TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStoreContext } from "../GlobalStore";

function Main() {

  const [user, setUser] = useState("");
  const [, updateStore] = useStoreContext();
  const winLocation = useHistory();

  function login(e) {
    e.preventDefault();
    updateStore({ do:"signin", name:user });
    winLocation.push("/chatroom");
  }

  return(
    <Container maxWidth='sm' style={{marginTop:"8rem"}} >
      <Paper className="main-card" elevation={3} >
        <form noValidate autoComplete="off" onSubmit={e => login(e)}>
          <div style={{margin:"0.5rem 2rem"}}>
            <TextField fullWidth label="Username" variant="standard" 
              value={user} onChange={e => setUser(e.target.value)} />
          </div>
          <Button variant="contained" color="primary" onClick={e => login(e)}>Enter Chatroom</Button>
        </form>
      </Paper>
    </Container>  
  )
}

export default Main;