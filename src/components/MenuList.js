import React from 'react';
import Carousel from './Carousel';
import TitleRowComponent from './TitleRowComponent';

const MenuList = ({ category }) => {

  const movies = category;
  const titles = [
    'Em cartaz',
    'Mais votados',
    'Populares',
    'Próximos lançamentos',
    'Marvel',
    '007 - James Bond',
    'Animados'
  ];
  movies.forEach((el, index) => {
    el.title = titles[index]
  });

  return (
    <>
      {movies.map((item, index) => (
        <TitleRowComponent titleLabel={item.title} key={item.id}>
          <Carousel data={item.data}/>
        </TitleRowComponent>
      ))}
    </>
  );
}

export default MenuList;
