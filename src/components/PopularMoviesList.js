import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { loadPopularMovies } from '../redux/AC';

class PopularMoviesList extends Component {
  render() {
    return <MovieList {...this.props} />
  }
}

PopularMoviesList.propTypes = {
  page: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  movies: PropTypes.array,
  totalPages: PropTypes.number,
  loadMovies: PropTypes.func.isRequired
};

export default connect(({movies: {popularMovies}}, {page}) => {
  return {
    loading: popularMovies.loading,
    movies: popularMovies.movies,
    totalPages: popularMovies.totalPages,
  }
}, {loadMovies: loadPopularMovies})(PopularMoviesList);