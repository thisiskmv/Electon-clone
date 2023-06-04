import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actionTypes';

const initialState = {
  product: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        error: null,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        error: action.payload,
      };
    default:
      return state;
  }
};


export default reducer;

export const initialStates = {
  selectedColor: '',
  selectedSize: '',
  selectedQuantity: 1,
  selectedImage: ''
};

export function productReducer(state, action) {
  switch (action.type) {
    case 'SET_SELECTED_COLOR':
      return {
        ...state,
        selectedColor: action.payload
      };
    case 'SET_SELECTED_SIZE':
      return {
        ...state,
        selectedSize: action.payload
      };
    case 'SET_SELECTED_IMAGE':
      return {
        ...state,
        selectedImage: action.payload
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        selectedQuantity: state.selectedQuantity + 1
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        selectedQuantity: state.selectedQuantity - 1
      };
    default:
      return state;
  }
}
