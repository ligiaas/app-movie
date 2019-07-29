import React from 'react';
import * as api from '../api/index';
import Navbar from './Navbar';
import MenuList from './MenuList';
import Result from './Result';
import '../assets/App.css';

class Home extends React.Component {
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
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
         <Navbar searchMovies={this.searchMovies.bind(this)}/>
         <div className="fluid-container wm-home">
           <div className="row">
             <div className="col-12">
               {isRes ? <Result result={searchResult}/> : <MenuList category={movies}/>}
             </div>
           </div>
         </div>
       </div>
      );
    }
  }
}

export default Home;
