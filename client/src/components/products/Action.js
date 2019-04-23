import React, { Component } from 'react';

import shopIcon from '../../img/shop-icon.png';
import viewIcon from '../../img/view-icon.png';
import likeIcon from '../../img/like-icon.png';
import '../../styles/products.css';

import ProductsNav from './ProductsNav';

import { Consumer } from '../../context';

class Product extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { products } = value;
          const product = products.filter(product => product.action === true);
          return (
            <section className="products" id="articles">
              <ProductsNav />

              <div className="row">
                {product.map(prod => (
                  <div className="col-sm-6 col-md-4 col-lg-3" key={prod._id}>
                    <article className="product">
                      <div className="productImgHolder">
                        <a href="#e">
                          <img
                            src={prod.productImage}
                            alt="product1.jpg"
                            className="img-fluid"
                          />
                        </a>
                        <ul className="hover-element">
                          <li>
                            <a href="#e">
                              <img src={shopIcon} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#e">
                              <img src={viewIcon} alt="" />
                            </a>
                          </li>
                          <li>
                            <a href="#e">
                              <img src={likeIcon} alt="" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-title">
                        <h3>
                          {prod.gender}
                          <span>{prod.model}</span>
                        </h3>
                        <span>{prod.price}</span>
                      </div>
                      <ul className="color">
                        <li className="purple">
                          <a href="#e">purple</a>
                        </li>
                        <li className="green">
                          <a href="#e">green</a>
                        </li>
                        <li className="black">
                          <a href="#e">black</a>
                        </li>
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Product;
