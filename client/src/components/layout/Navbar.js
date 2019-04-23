import React, { Component } from 'react';
import Logo from '../../img/logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light" id="top">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            <img src={Logo} className="img-fluid" alt="logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link"
                  activeClassName="active"
                >
                  NASLOVNA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-link"
                  activeclassname="active"
                >
                  PRODAVNICA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeclassname="active"
                >
                  O NAMA
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeclassname="active"
                >
                  KONTAKT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="search-bar">
            <input type="text" />
            <div className="icons">
              <a href="#ee">
                <i className="fas fa-search" />
              </a>
              <a href="#ee">
                <i className="fas fa-shopping-bag" />
              </a>
            </div>
          </div>
        </div>
        {this.props.children}
      </nav>
    );
  }
}

export default Navbar;
