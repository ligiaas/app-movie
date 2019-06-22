import React from 'react';
import Navbar from './Navbar';
import MenuList from './MenuList';
import '../assets/App.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="fluid-container wm-home">
          <div className="row">
            <div className="col-12">
              <MenuList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
