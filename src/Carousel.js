import React from 'react';
import './App.css';

import { img } from './assets/img/aggretsuko.jpg';
import { data } from './api/in18.json'; 


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: img,
      imgAlt: data.movie.title
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }
  
  render() {
    return (
      <div>
        <div className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item">
              <img src={this.state.imgData} alt={this.state.imgAlt} className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
