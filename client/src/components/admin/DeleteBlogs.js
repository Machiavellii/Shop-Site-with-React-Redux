import React, { Component } from 'react';
import { Consumer } from '../../context';
import DeleteBlog from './DeleteBlog';
import { Link } from 'react-router-dom';

export class DeleteBlogs extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { blogs } = value;
          return (
            <React.Fragment>
              <Link to="/aadmin=@1222">
                <i className="fas fa-arrow-alt-circle-left" /> Back
              </Link>
              <div className="row mt-3">
                <DeleteBlog blogs={blogs} />
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default DeleteBlogs;
