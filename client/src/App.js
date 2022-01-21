import React, {useContext, useEffect} from 'react';
import { Context } from './index';
import {observer} from 'mobx-react-lite'
import UserService from './services/UserService'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/Login/Login';
import RegistrationComponent from './components/Registration/Registration';
import StartComponent from './components/Start/Start';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Messenger from './components/Messenger/Messenger';
import './App.css';

function App() {
  const {store} = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  if (store.isLoading) {
    return <div>Загрузка...</div>
  }

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
          {console.log(JSON.parse(JSON.stringify(store.user)))}
          <Messenger user={JSON.parse(JSON.stringify(store.user))} />
        </Route>

        <Route path="/main">
          <Main user={JSON.parse(JSON.stringify(store.user))} />
        </Route>

        <Redirect to="/start" />
      </Switch>
    </BrowserRouter>
  );
}

export default observer(App);
