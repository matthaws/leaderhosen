import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './layout/header';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
