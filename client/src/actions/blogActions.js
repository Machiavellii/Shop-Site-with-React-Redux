import { GET_BLOGS, ADD_BLOG, GET_ERRORS, DELETE_BLOG } from './types';
import axios from 'axios';

//GET BLOGS
export const getBlogs = () => async dispatch => {
  const res = await axios.get('/api/blog');

  dispatch({
    type: GET_BLOGS,
    payload: res.data
  });
};

//ADD BLOGS
export const addBlog = blogData => dispatch => {
  axios
    .post('/api/blog', blogData)
    .then(res =>
      dispatch({
        type: ADD_BLOG,
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

//Delete Blog
export const deleteBlogs = id => dispatch => {
  axios
    .delete(`/api/blog/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_BLOG,
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
