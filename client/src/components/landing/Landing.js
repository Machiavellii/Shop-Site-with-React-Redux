import React, { Component } from 'react';
import Slider from './Slider';
import Collections from './Collections';

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Slider />
        <div className="container">
          <Collections />
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
