import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../actions/productActions';

class DeleteProduct extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  deleteProducts = id => {
    this.props.deleteProduct(id);
  };

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <Link to="/admin">
          <i className="fas fa-arrow-alt-circle-left" /> Back
        </Link>
        <div className="row mt-3">
          {products.map(product => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product._id}>
              <article className="product">
                <i
                  className="fas fa-times"
                  style={{
                    float: 'right',
                    color: 'red',
                    cursor: 'pointer',
                    zIndex: '1'
                  }}
                  onClick={this.deleteProducts.bind(this, product._id)}
                />
                <div className="productImgHolder" style={{ zIndex: '-1' }}>
                  <a href="#e">
                    <img
                      src={product.productImage}
                      alt="product1.jpg"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="product-title">
                  <h3>
                    {product.gender}
                    <span>{product.model}</span>
                  </h3>
                  <span>{product.price}</span>
                </div>
              </article>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts, deleteProduct }
)(DeleteProduct);
