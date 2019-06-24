import React from 'react';
import Slider from 'react-slick';
import '../assets/App.css';

class Carousel extends React.Component {

  render() {
    var movies = this.props.data.results;
    
    var settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
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
            <div className="m-3 carousel-item" key={item.id}>
              <a href="www.google.com">
                <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title}/>
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
