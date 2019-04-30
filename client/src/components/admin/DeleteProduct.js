import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

import { Link } from 'react-router-dom';

class DeleteProduct extends Component {
  deleteProduct = async (id, dispatch) => {
    await axios.delete(`/api/products/${id}`);

    dispatch({ type: 'DELETE_PRODUCT', payload: id });
    window.location.reload();
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { products, dispatch } = value;

          return (
            <React.Fragment>
              <Link to="/aadmin=@1222">
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
                        onClick={this.deleteProduct.bind(
                          this,
                          product._id,
                          dispatch
                        )}
                      />
                      <div
                        className="productImgHolder"
                        style={{ zIndex: '-1' }}
                      >
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
        }}
      </Consumer>
    );
  }
}

export default DeleteProduct;
