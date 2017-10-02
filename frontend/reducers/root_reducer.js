import { combineReducers } from 'redux';
import session from './users_reducer';


const RootReducer = combineReducers({
  session
});

export default RootReducer;
