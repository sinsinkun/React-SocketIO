import { Container, Button, TextField, Grid, List, ListItem } from "@material-ui/core";
import { useEffect, useState, useRef } from "react";

function MessagesList(props) {

  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const endOfMsgs = useRef();

  useEffect(() => {
    let newMsgs = msgs;
    if (props.res) newMsgs.push(props.res);
    if (newMsgs.length > 20) newMsgs.shift();
    setMsgs([...newMsgs]);
    setInput("");
    // eslint-disable-next-line
  }, [props.res])

  useEffect(() => {
    endOfMsgs.current.scrollIntoView();
  })

  function pressEnter(e) {
    if (e.key === "Enter") props.sendMsg(input);
  }

  return(
    <Container disableGutters className="msg-col">
      <div className="msg-list">
        <List>
        {msgs.map(msg => {
          return <ListItem>{msg.user}: {msg.msg}</ListItem>
        })}
        <end ref={endOfMsgs} />
        </List>
      </div>

      <Grid container className="msg-input-area">
        <Grid xs item>
          <div style={{marginRight:"0.5rem"}}>
          <TextField fullWidth size="small" label="New Message" variant="filled" className="msg-input" 
            color="secondary" value={input} onChange={e => setInput(e.target.value)} onKeyPress={pressEnter} />
          </div>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => props.sendMsg(input)} color="secondary" style={{marginTop:"0.3rem"}}>Send</Button>
        </Grid>
      </Grid>

    </Container>
  )
}

export default MessagesList;