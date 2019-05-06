import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import shopIcon from '../../img/shop-icon.png';
import viewIcon from '../../img/view-icon.png';
import likeIcon from '../../img/like-icon.png';
import '../../styles/products.css';

import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';

class Male extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props;
    const product = products.filter(product => product.product === 'male');
    return (
      <React.Fragment>
        <Link to="/home" className="mb-3">
          <i className="fas fa-arrow-alt-circle-left" /> Back
        </Link>
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Male);
