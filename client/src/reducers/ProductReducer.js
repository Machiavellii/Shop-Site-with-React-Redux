import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        payload: [action.payload, ...state.products]
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product._id !== action.payload
        )
      };
    default:
      return state;
  }
}
