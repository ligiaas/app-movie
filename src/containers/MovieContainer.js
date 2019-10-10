import React from 'react';
import * as api from '../api/index';
import MovieComponent from '../components/MovieComponent';
import Navbar from '../components/Navbar';
import Result from '../components/Result';

class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movie: {
        poster_path: '',
        overview: '',
        release_date: '',
        title: '',
        vote_average: '',
        runtime: null
      },
      searchResult: [],
      isRes: false
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

  searchMovies(val) {
    api.searchMovies(val)
      .then(response => {
        this.setState({
          isLoaded: true,
          isRes: true,
          searchResult: response.data.results
        })
      },
      (error) =>{
        this.setState({
          isLoaded: false,
          error
        });
      }
    )
  }

  render() {
    const {error, isLoaded, isRes, movie, searchResult} = this.state;

    if(error) {
      return <div>Error: {error.message}</div>;
    }

    if(!isLoaded) {
      return <div>Loading...</div>;
    }
      return (
        <>
          <Navbar searchMovies={this.searchMovies.bind(this)}/>
          { isRes ? <Result result={searchResult}/> : <MovieComponent movie={movie}/>}
        </>
      );
  }
}

export default Movie;
