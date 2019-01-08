import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies';
import similarMovies from './similarMovies';
import searchMovie from './searchMovie';

export default combineReducers({
  router: routerReducer,
  movies,
  similarMovies,
  searchMovie
});