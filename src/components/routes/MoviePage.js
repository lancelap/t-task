import React from 'react';
import { Route } from 'react-router-dom';
import Movie from '../../components/Movie';

function MoviePage({match}) {
  return <Route path = '/movie/:id' render = {getMovie}/>
}

function getMovie({match}) {
  return <Movie id = {match.params.id} key = {match.params.id}/>
}

export default MoviePage;