import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PopularMovies from './routes/PopularMovies';
import HomePage from './routes/HomePage';
import MoviePage from './routes/MoviePage';

class Root extends Component {
  render() {
    return(
        <Switch>
          <Route exact strict path='/' component={HomePage}/>
          <Route path='/popular' component={PopularMovies}/>
          <Route path='/movie/:id' component={MoviePage}/>
        </Switch>
    )
  }
}

export default Root;