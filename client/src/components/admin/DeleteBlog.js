import React, { Component } from 'react';
import { Consumer } from '../../context';

import axios from 'axios';

export class DeleteBlog extends Component {
  deleteBlog = async (id, dispatch) => {
    await axios.delete(`/api/blog/${id}`);

    dispatch({ type: 'DELETE_BLOG', payload: id });
    window.location.reload();
  };

  render() {
    const { blogs } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return blogs.map(blog => (
            <div className="col-sm-6 mb-3" key={blog._id}>
              <div className="card">
                <div className="card-body">
                  <i
                    className="fas fa-times"
                    style={{
                      float: 'right',
                      color: 'red',
                      cursor: 'pointer',
                      zIndex: '1'
                    }}
                    onClick={this.deleteBlog.bind(this, blog._id, dispatch)}
                  />
                  <h5 className="card-title">{blog.title}</h5>

                  <p className="card-text">{blog.text}</p>
                </div>
              </div>
            </div>
          ));
        }}
      </Consumer>
    );
  }
}

export default DeleteBlog;
