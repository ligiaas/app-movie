import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Result from './components/Result';
import Movie from './components/Movie';
import './assets/App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/movie/:handle" component={Movie} />
      </div>
    </Router>
  );
}

export default App;
