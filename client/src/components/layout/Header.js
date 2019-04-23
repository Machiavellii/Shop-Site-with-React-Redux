import React, { Component } from 'react';

import '../../styles/small-header.css';

class Header extends Component {
  render() {
    return (
      <div className="small-header">
        <div className="container ">
          <a href="tel: +381 11 555 55 555">+381 11 555 55 555</a>
          <a href="#e">Prijavi se</a>
        </div>
      </div>
    );
  }
}

export default Header;
