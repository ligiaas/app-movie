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
      value: '',
      isRet: false,
      ret: []
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
  
  searchMovies() {
    api.searchMovies(this.state.value)
      .then(response => {
        this.setState({
          isRet: true,
          ret: response.data.results
        })
        console.log(response);
      },
      (error) =>{
        this.setState({
          isRet: false,
          error
        });
      }  
    )

  }

  render() {
    const {error, isLoaded, movies, ret, value} = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
         <Navbar searchMovies={this.searchMovies.bind(this)} value={value}/>
         <div className="fluid-container wm-home">
           <div className="row">
             <div className="col-12">
               {isLoaded ? <MenuList category={movies}/> : <Result result={ret}/>}
             </div>
           </div>
         </div>
       </div>
      );
    }
  }
}

export default Home;
