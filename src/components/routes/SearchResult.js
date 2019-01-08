import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchMovieList from '../SearchMovieList';

function SearchResult({match}) {
  if (match.isExact) return <Redirect to = '/search/1'/>
  return <Route path = '/search/:page' render = {getMoviesPaginator}/>
}

function getMoviesPaginator({match}) {
  return <SearchMovieList page = {match.params.page}/>
}

export default SearchResult; 
