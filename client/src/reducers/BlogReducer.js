import { GET_BLOGS, ADD_BLOG, DELETE_BLOG } from '../actions/types';

const initialState = {
  blogs: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        blogs: action.payload
      };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [action.payload, ...state.blogs]
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog._id !== action.payload)
      };
    default:
      return state;
  }
}
