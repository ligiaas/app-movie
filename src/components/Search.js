import React from 'react';
import * as api from '../api/index'
import '../assets/App.css';

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isRet: null,
      value: '', 
      results: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    if(this.state.value <= 3){
      alert('Dados incorretos! Por favor tente novamente.');
    } else {
      api.getMovies()
        .then(responses => {
          this.setState({
            isLoaded: true,
            results: responses.data.results
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
    this.setState({value: ''});
    event.preventDefault();
  }
  
  render() {
    return (
      <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar..." aria-label="Pesquisar" value={this.state.value} onChange={this.handleChange}/>
        <input className="btn btn-outline-light my-2 my-sm-0" type="submit" value="Pesquisar"/>
      </form>
    );
  }
}
export default Search;
