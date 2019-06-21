import React from 'react';
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
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="navbar-text wm_brand">Web Movies</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navDrop" aria-controls="navDrop" aria-expanded="false" aria-label="Navegação Mobile">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navDrop">
          <form className="form-inline ml-auto my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}
export default Navbar;
