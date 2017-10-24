import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: [],
  dropdownOpen: false
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
    case OPEN_DROPDOWN:
      newState = merge({}, state);
      newState.dropdownOpen = true;
      return newState;
    case CLOSE_DROPDOWN:
      newState = merge({}, state);
      newState.dropdownOpen = false;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
