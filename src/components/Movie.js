import React from 'react';
import * as api from '../api/index';
import Navbar from './Navbar';
import '../assets/App.css';

class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      movie: {
        poster_path: '',
        overview: '',
        release_date: '',
        title: '',
        vote_average: ''
      }
    };
  }

  componentDidMount() {
    const { handle } = this.props.match.params
    api.getMovie(handle)
      .then(response => {
        this.setState({
          isLoaded: true,
          movie: response.data
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  
  render() {
    const {poster_path, overview, release_date, title, runtime, vote_average} = this.state.movie;
    const time = (`${parseInt(runtime / 60)}h${runtime % 60}min`);
      return (
        <div>
          <Navbar/>
          <div className="col-12">
            <a href="/" className="btn btn-outline-light ml-2 my-2 my-sm-0">Home</a>
          </div>
          <div className="wm-card text-white mt-5 mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className="card-img"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <p className="text-muted">{release_date.split('-', 1)}</p>
                  <p className="card-text">Duração <strong>{time} </strong></p>
                  <p className="card-text">Avaliação dos usuários <strong>{vote_average}</strong></p>
                  <h3>Sinopse</h3>
                  <p className="card-text">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Movie;
