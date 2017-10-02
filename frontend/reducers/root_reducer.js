import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import reactDeviseReducers from 'react-devise/lib/reducers';

const RootReducer = combineReducers({
  ...reactDeviseReducers
});

export default RootReducer;
