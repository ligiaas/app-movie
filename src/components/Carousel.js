import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {

  render() {
    let movies = this.props.data.results;
    console.log(movies);
    let settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 2,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <Slider {...settings}>
          {movies.map(item => (
            <div className="m-2 carousel-item" key={item.id}>
              <a href={`/movie/${item.id}`}>
                {
                  item.poster_path ? <img src={`https://image.tmdb.org/t/p/w154${item.poster_path}`} alt={item.title}/> : <p>Imagem não disponível</p>
                }
              </a>
              <div className="wm-car-caption">
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
