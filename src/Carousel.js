import React from 'react';
import * as api from './api/index';
import './App.css';

// import { data } from './api/in18.json'; 


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      img: '',
      movies: []
    };
  }

  componentDidMount() {
    api.getMovies()
      .then(
        (result) => {
          console.log((result));
          this.setState({
            isLoaded: true,
            movies: result
          });
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
          <div className="container">
            <div className="row">
              {movies.map((item, index) => (
                <div className="col-12" key={item.data.results[index].id}>
                  <p>{item.data.results[index].title}</p>
                  {/* <img src={`https://image.tmdb.org/t/p/w154${item.data.poster_path}`} alt={item.data.title} className="d-block w-100" /> */}
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
