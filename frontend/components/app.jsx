import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {initReactDevise, authRoutes, PrivateRoute} from 'react-devise';

const {clientResourceName} = initReactDevise()();

const App = () => {
  return (
    <Provider store={store}/>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/" component={Home} />
          {authRoutes({notFoundComponent: NotFound})}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;


// <PrivateRoute exact path="/products" component={Products} />
