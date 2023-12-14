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
      const newListings = state;
      newListings.push(action.value);
      return newListings;
    case 'DELETE_LISTING':
      const listings = state;
      listings.splice(action.value.idx, 1)
      return listings;
    case 'SET_LISTINGS':
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ user, listings });
