import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from '../containers/HomeContainer';
import Result from '../components/Result';
import MovieContainer from '../containers/MovieContainer';
import '../assets/MasterPage.css';

function MasterPage() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/result" component={Result} />
        <Route path="/movie/:handle" component={MovieContainer} />
      </div>
    </Router>
  );
}

export default MasterPage;
