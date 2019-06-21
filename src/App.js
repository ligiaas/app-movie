import React from 'react';
import ReactDOM from 'react-dom';
// import Clock from './App';
// import Carousel from './Carousel';
import Navbar from './Navbar';
import './App.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Navbar/>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
