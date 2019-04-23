import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';

import axios from 'axios';

export class DeleteBlog extends Component {
  deleteBlog = async (id, dispatch) => {
    await axios.delete(`/api/blog/${id}`);

    dispatch({ type: 'DELETE_BLOG', payload: id });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { blogs, dispatch } = value;
          return (
            <React.Fragment>
              <Link to="/aadmin=@1222">
                <i className="fas fa-arrow-alt-circle-left" /> Back
              </Link>
              <div className="row mt-3">
                {blogs.map(blog => (
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
                          onClick={this.deleteBlog.bind(
                            this,
                            blog._id,
                            dispatch
                          )}
                        />
                        <h5 className="card-title">{blog.title}</h5>

                        <p className="card-text">{blog.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default DeleteBlog;
