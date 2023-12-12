export const setUser = (username) => {
  return {
    type: 'SET_USER',
    value: username,
  };
};

export const addListing = (index) => {
  return {
    type: 'ADD_LISTING',
    value: index,
  };
};

export const deleteListing = (index) => {
  return {
    type: 'DELETE_LISTING',
    value: index,
  };
};
