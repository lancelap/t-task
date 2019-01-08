import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { searchMovie } from '../redux/AC';

class SearchMoviesList extends Component {
  render() {
    return <MovieList {...this.props} />
  }
}

SearchMoviesList.propTypes = {
  page: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  movies: PropTypes.array,
  totalPages: PropTypes.number,
  loadMovies: PropTypes.func.isRequired
};

export default connect((state) => {
  return {
    loading: state.searchMovie.loading,
    movies: state.searchMovie.movies,
    totalPages: state.searchMovie.totalPages,
  }
}, {loadMovies: searchMovie})(SearchMoviesList);