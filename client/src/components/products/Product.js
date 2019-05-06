import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import shopIcon from '../../img/shop-icon.png';
import viewIcon from '../../img/view-icon.png';
import likeIcon from '../../img/like-icon.png';
import '../../styles/products.css';

class Product extends Component {
  onClick = id => {
    localStorage.setItem('id', JSON.stringify(id));
  };

  render() {
    const { gender, productImage, price, model, _id } = this.props.product;

    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <article className="product">
          <div className="productImgHolder">
            <Link to="/describe" onClick={this.onClick.bind(this, _id)}>
              <img
                src={productImage}
                alt="product1.jpg"
                className="img-fluid"
              />
            </Link>
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
              {gender}
              <span>{model}</span>
            </h3>
            <span>{price}</span>
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
    );
  }
}

export default Product;
