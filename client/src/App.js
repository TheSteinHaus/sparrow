import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/Login/Login';
import RegistrationComponent from './components/Registration/Registration';
import StartComponent from './components/Start/Start';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/start" exact>
          <StartComponent />
        </Route>

        <Route path="/login">
          <LoginComponent />
        </Route>

        <Route path="/register">
          <RegistrationComponent />
        </Route>

        <Route path="/friends">
          <Friends />
        </Route>

        <Route path="/main">
          {/* <Main /> */}
        </Route>

        <Redirect to="/start" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
