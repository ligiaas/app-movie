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
      movies: [],
      poster: ''
    };
    this.req = [];
  }

  componentDidMount() {
    console.log(api.getMovies);
    api.getMovies()
      .then(responses => {
        console.log(responses);
        this.setState({
          
        })
      }
        
    )
    // tratamento dos métodos api
    // let meth = api;
    // let meths = Object.keys(meth).map(req => {
    //   return [req];
    // })
    // meths.forEach(m => {
    //   console.log(m);
    //   api.${m}()
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       this.setState({
    //         isLoaded: true,
    //         movies: response.data.results
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
    // })
    // api.getListMovies()
    //   .then(
    //     (response) => {
    //       console.log(response);
    //       this.setState({
    //         isLoaded: true,
    //         movies: response.data.results
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="fluid-container wm-home">
          <div className="row">
            <div className="col-12">
              <MenuList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
