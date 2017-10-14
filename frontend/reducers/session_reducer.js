import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: {},
  errors: []
});

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case CLEAR_ERRORS:
      return merge({}, state, {errors: [] });
    default:
      return state;
  }
};

export default SessionReducer;
