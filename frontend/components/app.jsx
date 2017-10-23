import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './layout/header';
import Welcome from './layout/welcome';
import SessionFormContainer from './auth/session_form_container';
import { closeDropdown } from '../actions/session_actions';
import { connect } from 'react-redux';

const App = (props) => (
  <div>
    <Header />
    <div className="background" onClick={props.closeDropdown}>
      <Route exact path="/welcome" component={ Welcome } />
      <AuthRoute exact path="/login" component={ SessionFormContainer } />
      <AuthRoute exact path="/signup" component={ SessionFormContainer } />
      <ProtectedRoute exact path="/" component={ Welcome } />


    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  closeDropdown: () => dispatch(closeDropdown())
})

export default connect(null, mapDispatchToProps)(App);
