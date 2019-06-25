import React from 'react';
import Link from 'react-router-dom';
import Button from '../../node_modules/bootstrap/dist/css/bootstrap.css';

class WmButton extends React.Component {
  onClick() {
    return (
      <Link to="/">Home</Link>
    );
  }

  render() {
    const label = this.props.label

    return (
      <Button className="btn btn-outline-light" label={label}/>
    )
  }

}

export default WmButton;