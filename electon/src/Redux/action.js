import axios from 'axios';
import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actionTypes';

export const getProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const getProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`https://electon-server.onrender.com/products/${id}`)
      .then((response) => {
        // console.log(response.data)
        dispatch(getProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getProductFailure(error.message));
      });
  };
};
