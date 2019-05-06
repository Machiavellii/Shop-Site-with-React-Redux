import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import authReducer from './authReducer';
import BlogReducer from './BlogReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  product: ProductReducer,
  auth: authReducer,
  blog: BlogReducer,
  errors: errorReducer
});
