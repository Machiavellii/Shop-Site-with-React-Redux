import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOGS':
      return {
        ...state,
        blogs: action.payload
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload)
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [action.payload, ...state.blogs]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      blogs: [],
      user: [],
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/products');

    this.setState({ products: res.data });

    const blog = await axios.get('/api/blog');

    this.setState({ blogs: blog.data });

    const user = await axios.get('/api/admin');
    user.data.forEach(admin => {
      this.setState({ user: admin });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
