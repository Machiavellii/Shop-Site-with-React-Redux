import { GET_PRODUCTS, ADD_PRODUCT, GET_ERRORS, DELETE_PRODUCT } from './types';
import axios from 'axios';

export const getProducts = () => async dispatch => {
  const res = await axios.get('/api/products');

  dispatch({
    type: GET_PRODUCTS,
    payload: res.data
  });
};

export const addProduct = productData => dispatch => {
  axios
    .post('/api/products', productData)
    .then(res =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const deleteProduct = id => dispatch => {
  axios
    .delete(`/api/products/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
