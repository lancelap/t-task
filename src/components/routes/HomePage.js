import React from 'react';
import { Route } from 'react-router-dom'
import ListPopularMovies from '../ListPopularMovies';

function HomePage() {
  return <Route path = '/' render = {getHomePage}/>
}

function getHomePage() {
  return <ListPopularMovies page = '1'/>
}

export default HomePage;