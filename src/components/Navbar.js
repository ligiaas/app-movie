import React from 'react';
import '../assets/App.css';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.persist();
    this.setState({value: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.value <= 3){
      alert('Dados incorretos! Por favor tente novamente.');
    } else {
      this.props.searchMovies(this.state.value);
      console.log(this.state.value);
    }
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <h1><a className="wm_brand" href="/">Web Movies</a></h1>
        <div className="ml-auto" id="navDrop">
        <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={this.onSubmit}>
          <input className="form-control mr-sm-2" type="search" placeholder="Busca por filme" aria-label="Pesquisar" value={this.state.value} onChange={this.onChange}/>
          <input className="btn btn-outline-light my-2 my-sm-0" type="submit" value="Pesquisar"/>
        </form> 
        </div>
      </nav>
    );
  }
}
export default Navbar;
