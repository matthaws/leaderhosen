import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {initReactDevise, authRoutes, PrivateRoute} from 'react-devise';
import Home from './home';

const App = ({store}) => {
  return (
    <Provider store={store} >
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;


// {authRoutes({notFoundComponent: NotFound})}  
// <Route component={NotFound} />
// <PrivateRoute exact path="/products" component={Products} />
