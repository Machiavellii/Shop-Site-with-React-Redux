import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DecorationImg from '../../img/decoration-line.png';

import Female from '../../img/female-products.jpg';
import Male from '../../img/male-products.jpg';

import '../../styles/collection.css';

class Collections extends Component {
  render() {
    return (
      <section className="collections">
        <div className="heading">
          <h1>Dobro Dosli u nasu prodavnicu</h1>
          <img src={DecorationImg} alt="decoration-line.png" />
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            <br />
            minima non tenetur numquam officia assumenda! Veniam provident
            voluptate unde error! Reprehenderit, beatae fugiat.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="female">
              <Link to="/female">
                <img src={Female} className="img-fluid" alt="" />
                <span>Zenska Kolekcija</span>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="male">
              <Link to="/male">
                <img src={Male} className="img-fluid" alt="" />
                <span>Muska Kolekcija</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Collections;
