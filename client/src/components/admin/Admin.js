import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductPage from './ProductPage';
import BlogPage from './BlogPage';

class Admin extends Component {
  state = {
    showProduct: false,
    showBlog: false
  };

  onClick = () => {
    this.setState({ showProduct: !this.state.showProduct });
  };

  onBlogClick = () => {
    this.setState({ showBlog: !this.state.showBlog });
  };

  render() {
    const { showProduct, showBlog } = this.state;
    return (
      <React.Fragment>
        <div className="card mb-3">
          <div
            className="card-header text-center"
            style={{ cursor: 'pointer' }}
            onClick={this.onClick}
          >
            Add Product
          </div>
          {showProduct ? <ProductPage /> : null}
        </div>

        <div className="card mb-4">
          <div
            className="card-header text-center"
            style={{ cursor: 'pointer' }}
            onClick={this.onBlogClick}
          >
            Add New Blog
          </div>
          {showBlog ? <BlogPage /> : null}
        </div>

        <div className="card">
          <div className="row">
            <div className="col-sm-6">
              <Link
                to="/deleteproduct"
                className="btn btn-danger btn-block mb-3"
              >
                {' '}
                Delete Product
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/deleteblog" className="btn btn-danger btn-block mb-3">
                Delete Blog
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Admin);
