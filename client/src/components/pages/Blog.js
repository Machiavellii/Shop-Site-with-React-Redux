import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogs } from '../../actions/blogActions';
import PropTypes from 'prop-types';

import Moment from 'react-moment';

class Blog extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }

  render() {
    const { blogs } = this.props;
    return (
      <div className="row">
        {blogs.map(blog => (
          <div className="col-sm-6 mb-3" key={blog._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <small className="text-muted">
                  Written by Admin on{' '}
                  <Moment format="DD/MM/YYYY">{blog.date}</Moment>
                </small>
                <hr />
                <p className="card-text">{blog.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Blog.propTypes = {
  blogs: PropTypes.array.isRequired,
  getBlogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blogs: state.blog.blogs
});

export default connect(
  mapStateToProps,
  { getBlogs }
)(Blog);
