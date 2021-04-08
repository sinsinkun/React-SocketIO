import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/style.css';
import { StoreProvider } from './components/GlobalStore';
import Navbar from './components/Navbar';
import { Container } from '@material-ui/core';
import Main from './components/Main';
import Chatroom from './components/Chatroom';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Switch>
          <Container maxWidth='md' className="App" style={{marginTop:"0.8rem"}}>
            {/* Content to switch between */}
            <Route exact path="/"><Main /></Route>
            <Route path="/chatroom"><Chatroom /></Route>
          </Container>
        </Switch>
        {/* Footer */}
      </Router>
    </StoreProvider>
  );
}

export default App;
