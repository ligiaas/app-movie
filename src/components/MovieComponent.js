import React from 'react';
import PropTypes from 'prop-types';

const MovieComponent = ({ movie }) => {
  console.log(movie);
  const time = (`${parseInt(movie.runtime / 60)}h${movie.runtime % 60}min`);
  return (
    <div>
      <div className="col-12">
        <a href="/" className="btn btn-outline-light ml-2 my-2 my-sm-0">Home</a>
      </div>
      <div className="wm-card text-white mt-5 mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="card-img"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{movie.title}</h4>
              <p className="text-muted">{movie.release_date.split('-', 1)}</p>
              <p className="card-text">Duração <strong>{time}</strong></p>
              <p className="card-text">Avaliação dos usuários <strong>{movie.vote_average}</strong></p>
              <h3>Sinopse</h3>
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieComponent.propTypes = {
  movie: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired
}

export default MovieComponent;
