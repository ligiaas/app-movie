import React from 'react';
import Carousel from './Carousel';
import '../assets/App.css';

class MenuList extends React.Component {

  render() {
    const movies = this.props.category;
    var titles = [
      'Em cartaz',
      'Mais votados',
      'Populares',
      'Próximos lançamentos',
      'Marvel',
      '007 - James Bond',
      'Animados'
    ];
    movies.forEach((el, index) => {
      el.title = titles[index]
    });

    return (
      <div>
        {movies.map((item, index) => (
          <div key={index}>
            <h5>{item.title}</h5>
            <div>
              <Carousel data={item.data}/>
            </div>
          </div>
        ))}
      </div>
     );
  }
}

export default MenuList;
