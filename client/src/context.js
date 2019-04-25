import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    products: [],
    blogs: [],
    user: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get('/api/products')
      .then(res => this.setState({ products: res.data }));

    axios.get('/api/blog').then(blog => this.setState({ blogs: blog.data }));

    axios.get('/api/admin').then(user =>
      user.data.forEach(admin => {
        this.setState({ user: admin });
      })
    );
  }

  componentDidUpdate() {
    axios
      .get('/api/products')
      .then(res => this.setState({ products: res.data }));

    axios.get('/api/blog').then(blog => this.setState({ blogs: blog.data }));
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
