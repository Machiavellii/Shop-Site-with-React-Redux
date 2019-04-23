import React from 'react';

import { NavLink } from 'react-router-dom';

const ProductsNav = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/products" className="nav-link" activeClassName="active">
          NOVA KOLEKCIJA
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/popularly" className="nav-link" activeClassName="active">
          POPULARNO
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/action" className="nav-link" activeClassName="active">
          AKCIJA
        </NavLink>
      </li>
    </ul>
  );
};

export default ProductsNav;
