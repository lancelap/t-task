import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import ListPopularMovies from '../ListPopularMovies';

function PopularMovies({match}) {
  if (match.isExact) return <Redirect to = '/popular/1'/>
  return <Route path = '/popular/:page' render = {getCommentsPaginator}/>
}

function getCommentsPaginator({match}) {
  return <ListPopularMovies page = {match.params.page}/>
}

export default PopularMovies; 