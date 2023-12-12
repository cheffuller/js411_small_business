import { combineReducers } from 'redux';

const user = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        username: action.value,
      };
      case 'LOGOUT_USER':
        return state;
    default:
      return state;
  }
};

const listings = (state = null, action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      return state;
    case 'DELETE_LISTING':
      return state;
    default:
      return state;
  }
};

export default combineReducers({ user, listings });
