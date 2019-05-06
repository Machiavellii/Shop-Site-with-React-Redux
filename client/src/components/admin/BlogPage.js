import React, { Component } from 'react';

import TextInputGroup from '../common/TextInputGroup';
import { connect } from 'react-redux';
import { addBlog } from '../../actions/blogActions';

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const newBlog = {
      title: this.state.title,
      text: this.state.text
    };

    this.props.addBlog(newBlog);
    if (this.state.title && this.state.text) {
      this.setState({ message: 'Blog Added' });

      //Clear Message Alert
      setTimeout(() => this.setState({ message: '' }), 2000);

      //Clear State
      this.setState({
        title: '',
        text: ''
      });
    }
  };

  render() {
    const { title, text, errors, message } = this.state;
    return (
      <div className="card-body">
        {message ? <Message msg={message} /> : null}
        <form onSubmit={this.onSubmit}>
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
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addBlog }
)(BlogPage);
