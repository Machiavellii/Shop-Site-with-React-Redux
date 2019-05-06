import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import PropTypes from 'prop-types';

import ProductsNav from './ProductsNav';

class Products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <section className="products" id="articles">
        <ProductsNav />
        <div className="row">
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </section>
    );
  }
}

Products.propsTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
