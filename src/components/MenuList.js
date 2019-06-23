import React from 'react';
import * as api from '../api/index';
import Carousel from './Carousel';
import '../assets/App.css';

class Home extends React.Component {
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
    api.getListMovies()
      .then(
        (response) => {
          console.log(response);
          this.setState({
            isLoaded: true,
            movies: response.data.results
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
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>Mais Populares</h3>
          <Carousel movies={movies}/>
        </div>
      );
    }
  }
}

export default Home;
