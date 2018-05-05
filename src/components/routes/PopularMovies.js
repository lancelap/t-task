import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PopularMoviesList from '../PopularMoviesList';

function PopularMovies({match}) {
  if (match.isExact) return <Redirect to = '/popular/1'/>
  return <Route path = '/popular/:page' render = {getMoviesPaginator}/>
}

function getMoviesPaginator({match}) {
  return <PopularMoviesList page = {match.params.page}/>
}

export default PopularMovies; 