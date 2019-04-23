import React, { Component } from 'react';

import { Consumer } from '../../context';
import axios from 'axios';
import TextInputGroup from '../common/TextInputGroup';

import Message from '../common/Message';

class BlogPage extends Component {
  state = {
    title: '',
    text: '',
    errors: {},
    message: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { title, text } = this.state;

    //Check for errors / validation
    if (title === '') {
      this.setState({ errors: { title: 'Title is required' } });
      return;
    }

    if (text === '') {
      this.setState({ errors: { text: 'Text is required' } });
      return;
    }

    const newBlog = {
      title,
      text
    };
    try {
      const res = await axios.post('/api/blog', newBlog);

      dispatch({ type: 'ADD_BLOG', payload: res.data });

      this.setState({ message: 'Blog Added' });

      //Clear Message Alert
      setTimeout(() => this.setState({ message: '' }), 3000);
    } catch (err) {
      if (err.response.status === 500) {
        this.setState({ message: 'There was a problem with the server' });
      } else {
        this.setState({ message: err.response.data.msg });
      }
    }

    this.setState({
      title: '',
      text: ''
    });
  };

  render() {
    const { title, text, errors, message } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card-body">
              {message ? <Message msg={message} /> : null}
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup
                  name="title"
                  placeholder={'* Blog Title'}
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextInputGroup
                  name="text"
                  placeholder={'* Blog Text'}
                  value={text}
                  onChange={this.onChange}
                  error={errors.text}
                />

                <input
                  type="submit"
                  value="Add Blog"
                  className="btn btn-dark btn-block"
                />
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default BlogPage;
