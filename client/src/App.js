import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/Login/Login';
import RegistrationComponent from './components/Registration/Registration';
import StartComponent from './components/Start/Start';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

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
          <Header />
        </Route>

        <Route path="/main">
          {/* <Main /> */}
          <Header />
        </Route>

        <Redirect to="/start" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
