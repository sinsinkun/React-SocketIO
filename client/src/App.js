import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './components/GlobalStore';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          {/* Navbar */}
          <Switch>
            {/* Content to switch between */}
            <Route>App</Route>
          </Switch>
          {/* Footer */}
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
