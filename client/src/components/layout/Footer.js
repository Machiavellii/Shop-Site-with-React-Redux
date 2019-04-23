import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-nav">
          <ul>
            <li>
              <a href="#e">
                <i className="fab fa-github-square github" />
              </a>
            </li>
            <li>
              <a href="#e">
                <i className="fab fa-facebook-square facebook" />
              </a>
            </li>
            <li>
              <a href="#e">
                <i className="fab fa-twitter-square twitter" />
              </a>
            </li>
            <li>
              <a href="#e">
                <i className="fab fa-instagram instagram" />
              </a>
            </li>
            <li>
              <a href="#e">
                <i className="fab fa-youtube-square youtube" />
              </a>
            </li>
          </ul>
          <ul className="mini-nav">
            <li>
              <Link to="/about">O NAMA</Link>
            </li>
            <li>
              <a href="#e">USLOVI KORISCENJA</a>
            </li>
            <li>
              <a href="#e">NOVOSTI</a>
            </li>
            <li>
              <Link to="/contact">KONTAKT</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
