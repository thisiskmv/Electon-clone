import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_WISHLIST, ADD_REVIEW } from './actionTypes';
// Action creators
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
export const addWishlist = (product) => {
  return { type: 'ADD_WISHLIST', payload: product };
};

export const removeWishlist = (productId) => {
  return { type: 'REMOVE_WISHLIST', payload: productId };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const toggleWishlist = (productId) => {
  return {
    type: TOGGLE_WISHLIST,
    payload: productId,
  };
};

export const addReview = (productId, review) => {
  return {
    type: ADD_REVIEW,
    payload: {
      productId,
      review,
    },
  };
};

// Async action creator using Redux Thunk
export const fetchProducts = () => {
  return (dispatch) => {
    // Simulating an API call
    setTimeout(() => {
      // Replace this with your actual API call to fetch products
      const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
      ];

      // Dispatch the action with the fetched products
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
    }, 1000);
  };
};
