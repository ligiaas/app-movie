import React from 'react';
import logo from './webmovies.png';
import './App.css';

class Navbar extends React.Component {
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
    
  }

  componentWillUnmount() {
    
  }
  
  render() {
    // const {error, isLoaded, movies} = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbar">
          <span className="navbar-text mr-auto wm_brand">Web Movies</span>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
export default Navbar;
