import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getBlogs, deleteBlogs } from '../../actions/blogActions';

export class DeleteBlog extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }

  deleteBlog = id => {
    this.props.deleteBlogs(id);
  };

  render() {
    const { blogs } = this.props;

    return (
      <React.Fragment>
        <Link to="/admin">
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
                    onClick={this.deleteBlog.bind(this, blog._id)}
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
  }
}

const mapStateToProps = state => ({
  blogs: state.blog.blogs
});

export default connect(
  mapStateToProps,
  { getBlogs, deleteBlogs }
)(DeleteBlog);
