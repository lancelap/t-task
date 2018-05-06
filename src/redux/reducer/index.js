import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import similarMovies from './similarMovies';

export default combineReducers({
  router: routerReducer,
  movies,
  similarMovies
});