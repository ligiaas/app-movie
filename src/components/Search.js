import React from 'react';
import '../assets/App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Pesquisar" value={this.props.searchText} onChange={this.handleChange}/>
        <input className="btn btn-outline-light my-2 my-sm-0" type="submit" value="Pesquisar"/>
      </form>
    );
  }
}
export default Search;
