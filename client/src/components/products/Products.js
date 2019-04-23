import React, { Component } from 'react';
import Product from './Product';
import { Consumer } from '../../context';

import ProductsNav from './ProductsNav';

class Products extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { products } = value;
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
        }}
      </Consumer>
    );
  }
}

export default Products;
