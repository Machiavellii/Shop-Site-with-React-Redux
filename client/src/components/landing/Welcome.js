import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="message">
          <h1 className="display-4 mb-4 text-white">
            Welcome to our <span>shop</span>{' '}
          </h1>
          <Link to="/home" className="btn btn-primary">
            LOOK AT OUR PRODUCTS
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
