import React from 'react';
import { Route } from 'react-router-dom'
import PopularMoviesList from '../PopularMoviesList';

function HomePage() {
  return <Route path = '/' render = {getHomePage}/>
}

function getHomePage() {
  return <PopularMoviesList page = '1'/>
}

export default HomePage;