import React, { Component } from 'react';

import { Consumer } from '../../context';

import Moment from 'react-moment';

class Blog extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { blogs } = value;
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
        }}
      </Consumer>
    );
  }
}

export default Blog;
