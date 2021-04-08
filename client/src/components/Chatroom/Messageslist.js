import { Container, Button, TextField, Grid, List, ListItem } from "@material-ui/core";
import { useEffect, useState } from "react";

function MessagesList(props) {

  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let newMsgs = msgs;
    if (props.res) newMsgs.push(props.res);
    if (newMsgs.length > 20) newMsgs.shift();
    console.log("set new array");
    setMsgs(newMsgs);
    // eslint-disable-next-line
  }, [props.res])

  function sendMsg() {
    props.sendMsg(input);
    console.log("sent message");
  }

  return(
    <Container disableGutters style={{color:"white"}}>
      <div>
        Messages:
        <List>
        {msgs.map(msg => {
          return <ListItem>{msg.user}: {msg.msg}</ListItem>
        })}
        </List>
      </div>
      <Grid container spacing={2} style={{marginTop:"1rem"}}>
        <Grid xs item>
          <TextField fullWidth size="small" label="New Message" variant="filled" color="secondary" 
            value={input} onChange={e => setInput(e.target.value)} />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={sendMsg} color="secondary">Send</Button>
        </Grid>
      </Grid>
      {console.log("finished render")}
    </Container>
  )
}

export default MessagesList;