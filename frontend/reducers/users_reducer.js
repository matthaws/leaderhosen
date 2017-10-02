import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/user_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, currentUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    case CLEAR_ERRORS:
      return merge({}, state, {errors: [] });
    default:
      return state;
  }
};

export default UserReducer;
