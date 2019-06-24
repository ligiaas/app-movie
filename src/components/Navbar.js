import React from 'react';
import Search from './Search';
import '../assets/App.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="navbar-text wm_brand">Web Movies</span>
        <div className="ml-auto" id="navDrop">
          <Search onSearchTextChange={this.handleSearchTextChange}/>
        </div>
      </nav>
    );
  }
}
export default Navbar;
