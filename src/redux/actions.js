export const setUser = (username) => {
  return {
    type: 'SET_USER',
    value: username,
  };
};

export const addListing = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing,
  };
};

export const deleteListing = (index) => {
  return {
    type: 'DELETE_LISTING',
    value: index,
  };
};

export const setListings = (listings) => {
  return {
    type: 'SET_LISTINGS',
    value: listings,
  }
}