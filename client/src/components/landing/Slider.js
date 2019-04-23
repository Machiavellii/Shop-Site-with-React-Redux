import React from 'react';

import '../../styles/slider.css';
import Slide1 from '../../img/slider/slide-1.jpg';
import Slide2 from '../../img/slider/slide-2.jpg';
import Slide3 from '../../img/slider/slide-3.jpg';
import Background from '../../img/bacground-intro.jpg';

const Slider = () => {
  return (
    <section className="slider">
      <div className="mobile-cover d-sm-block d-md-none">
        <img src={Background} className="img-fluid" alt="" />
      </div>
      <h2 className="frame">
        <span>SHOP</span>
        Kolekcija jesen / zima
      </h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide d-none d-md-block"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Slide1}
              className="d-block w-100 img-fluid"
              alt="slide-1.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Slide2}
              className="d-block w-100 img-fluid"
              alt="slide-2.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Slide3}
              className="d-block w-100 img-fluid"
              alt="slide-3.jpg"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Slider;
