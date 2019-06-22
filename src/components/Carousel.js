import React from 'react';
import '../assets/App.css';

class Carousel extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
        <div className="carousel slide" dataride="carousel">
          <div className="carousel-inner">
            {movies.map(item => (
              <div className="carousel-item" key={item.id}>
                <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title} className="d-block w-100" />
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
