import React from 'react';
import NavbarComponent from '../components/NavbarComponent';

class NavbarContainer extends React.Component {
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
    }
  }

  render() {
    return (
      <>
        <NavbarComponent/>
      </>
    )
  }
}

export default NavbarContainer;