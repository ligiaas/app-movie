import React from 'react';
import WmButton from './Button';
class Result extends React.Component {
  
  render() {
    const movies = this.props.data;
    var label = '← Home';
    return (
      <div>
        <h5>Filmes Encontrados</h5>
        <WmButton label={label}/>
        {movies.map(item => (
          <div className="m-3 carousel-item" key={item.id}>
            <a href="www.google.com">
              <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title}/>
            </a>
            <div className="wm-car-caption">
              <h6>{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Result;