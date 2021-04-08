import { Card, Typography } from "@material-ui/core";
import SocketClient from './SocketClient';

function Chatroom() {

  const socketRes = SocketClient();

  return(
    <Card className="chatroom-card">
      <Typography>Chat</Typography>
      <Typography>{socketRes}</Typography>
    </Card>
  )
}

export default Chatroom;