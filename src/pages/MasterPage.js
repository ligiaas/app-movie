import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from '../containers/HomeContainer';
import Result from '../components/Result';
import Movie from '../components/Movie';
import '../assets/MasterPage.css';

function MasterPage() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/result" component={Result} />
        <Route path="/movie/:handle" component={Movie} />
      </div>
    </Router>
  );
}

export default MasterPage;
