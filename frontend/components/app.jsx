import React from 'react';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Header from './layout/header';
import Welcome from './layout/welcome';
import Footer from './layout/footer';
import SessionFormContainer from './auth/session_form_container';
import Dashboard from './users/dashboard';
import { closeDropdown } from '../actions/session_actions';
import { connect } from 'react-redux';

const App = (props) => (
  <div>
    <Header />
    <div className="background" onClick={props.closeDropdown}>
      <Switch>
        <AuthRoute path="/login" component={ SessionFormContainer } />
        <AuthRoute path="/signup" component={ SessionFormContainer } />
        <Route path="/welcome" component={ Welcome } />
        <ProtectedRoute path="/" component={ Dashboard } />
      </Switch>
    </div>
    <Footer />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  closeDropdown: () => dispatch(closeDropdown())
})

export default withRouter(connect(null, mapDispatchToProps)(App));
