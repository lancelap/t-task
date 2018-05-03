import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PopularMovies from './routes/PopularMovies';
import HomePage from './routes/HomePage';

class Root extends Component {
  render() {
    return(
        <Switch>
          <Route exact strict path='/' component={HomePage} />
          <Route path='/popular' component={PopularMovies} />
        </Switch>
    )
  }
}

export default Root;