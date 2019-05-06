import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const loginUser = userData => dispatch => {
  axios
    .post('/api/auth', userData)
    .then(res =>
      dispatch({
        type: SET_CURRENT_USER,
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
