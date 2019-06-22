import React from 'react';
import * as api from '../api/index';
import '../assets/App.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      poster: ''
    };
  }

  componentDidMount() {
    api.getMovies()
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            movies: response.data.results
          });
          this.getImages(this.setState.movies);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount() {
    
  }
  
  render() {
    const {error, isLoaded, movies} = this.state;
    if(error) {
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="carousel slide" dataride="carousel">
            <div className="caousel-inner">
              {movies.map(item => (
                <div className="carousel-item" key={item.id}>
                  {/* <img src={item.poster_path} alt={item.title} className="d-block w-100" /> */}
                  {/* <h5>{item.title}</h5> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Carousel;
