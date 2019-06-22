import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import '../assets/App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="fluid-container">
          <Carousel/>
        </div>
      </div>
    );
  }
}

export default Home;
