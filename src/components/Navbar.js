import React from 'react';
import '../assets/App.css';

class Navbar extends React.Component {

  onChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if(e.target.value <= 3){
      alert('Dados incorretos! Por favor tente novamente.');
    } else {
      this.searchMovies();
      console.log(e);
    }
  }
  
  render() {
    const val = this.props.value;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span className="navbar-text wm_brand">Web Movies</span>
        <div className="ml-auto" id="navDrop">
          <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={e => this.onSubmit(e)}>
            <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Pesquisar" defaultValue={val}/>
            <input className="btn btn-outline-light my-2 my-sm-0" type="submit" value="Pesquisar"/>
          </form> 
        </div>
      </nav>
    );
  }
}
export default Navbar;
