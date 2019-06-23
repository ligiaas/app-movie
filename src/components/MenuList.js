import React from 'react';
import Carousel from './Carousel';
import '../assets/App.css';

class MenuList extends React.Component {
  render() {
    const movies = this.props.category;
    return (
      <div>
        {movies.map((item, index) => (
          <div key={index}>
            <h3>Título da Lista</h3>
            <Carousel options={item.data.results}/>
          </div>
        ))}
      </div>
     );
  }
}

export default MenuList;
