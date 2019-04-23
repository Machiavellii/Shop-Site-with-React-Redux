import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';

import '../../styles/describe.css';

class DescribeProduct extends Component {
  render() {
    const id = JSON.parse(localStorage.getItem('id'));
    return (
      <Consumer>
        {value => {
          const { products } = value;
          const product = products.filter(product => product._id === id);

          return (
            <React.Fragment>
              <Link to="/products" className="mb-3">
                <i className="fas fa-arrow-alt-circle-left" /> Back
              </Link>
              {product.map(prod => (
                <div className="row" key={prod._id}>
                  <div className=" col-md-5">
                    <img src={prod.productImage} alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-7">
                    <h4 className="mb-2">{prod.gender}</h4>
                    <p className="font-italic">{prod.model}</p>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Enim eligendi quidem velit accusamus voluptatum vero
                      delectus voluptate obcaecati harum similique! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Mollitia quia
                      necessitatibus impedit tempora voluptas modi tempore a
                      neque non officia!
                    </p>
                    <div className="mb-2">
                      <span className="first-span">Cena:</span>{' '}
                      <span>{prod.price}</span>
                    </div>
                    <div className="mb-2">
                      <span className="first-span">Dostava: </span>{' '}
                      <span>Besplatna</span>
                    </div>
                    <div className="mb-4">
                      <span className="first-span">Kolicina:</span>{' '}
                      <span>1</span>
                    </div>

                    <button className="btn btn-success mb-3">Kupi</button>
                  </div>
                </div>
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default DescribeProduct;
