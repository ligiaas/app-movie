import React from 'react';
import * as api from '../api/index';
import Navbar from '../components/Navbar';
import MenuList from '../components/MenuList';
import Result from '../components/Result';
import HomeComponent from '../components/HomeComponent';

/*
1- Trata de estilos porque importa CSS -> Component
2- Trata de Estados -> Container
3-> Trata de Chamadas HTTP -> (É do Container, mas pode ser melhor abstraído)
4-> Regras de visualização que poderiam ser melhor abstraídas.
*/

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      searchResult: [],
      isRes: false
    };
  }

  componentDidMount() {
    api.getMovies()
      .then(responses => {
        this.setState({
          isLoaded: true,
          movies: responses
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
    const {error, isLoaded, isRes, movies, searchResult} = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <Navbar searchMovies={this.searchMovies.bind(this)}/>
        <HomeComponent>
          { isRes ? <Result result={searchResult}/> : <MenuList category={movies}/> }
        </HomeComponent>
      </>
    );
  }
}

export default HomeContainer;
