import React from 'react';
class Result extends React.Component {
  
  render() {
    const movies = this.props.result;
    return (
      <div>
        <div className="col-12">
          <h5 className="d-inline-block">Filmes Encontrados</h5>
          <a href="/" className="btn btn-outline-light ml-2 my-2 my-sm-0">Home</a>
        </div>
        {movies.map(item => (
          <div className="m-3 d-inline-block" key={item.id}>
            <a href={`/movie/${item.id}`}>
              {
                item.poster_path ? 
                <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title}/> : 
                <p>Imagem não disponível</p>
              }
            </a>
            <div className="wm-car-caption">
              <h6>{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Result;