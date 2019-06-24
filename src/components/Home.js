import React from 'react';
import * as api from '../api/index';
import Navbar from './Navbar';
import MenuList from './MenuList';
import '../assets/App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    };
    this.req = [];
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

  render() {
    const {error, isLoaded, movies} = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
         <Navbar/>
         <div className="fluid-container wm-home">
           <div className="row">
             <div className="col-12">
               <MenuList category={movies}/>
             </div>
           </div>
         </div>
       </div>
      );
    }
  }
}

export default Home;
