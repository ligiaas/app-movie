import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Clock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
