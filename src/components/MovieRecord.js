import React from 'react';
import WmButton from './Button';
import '../assets/App.css';

class Movie extends React.Component {
  
  render() {
    const record = this.props.item;
    var label = '← Home';
      return (
        <div>
          <WmButton label={label}/>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="https://via.placeholder.com/550" className="card-img" alt="Title movie"/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{record.title} <small className="text-muted">2019</small></h5>
                  <p className="card-text">
                    Avaliação dos usuários
                  </p>
                  <h3>Sinopse</h3>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Warner Movies</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Movie;
