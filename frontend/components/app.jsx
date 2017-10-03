import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './layout/header';
import Welcome from './layout/welcome';
import SessionFormContainer from './auth/session_form_container';


const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/" component={Welcome} />
    </Switch>
  </div>
);

export default App;
