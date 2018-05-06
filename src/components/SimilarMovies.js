import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { loadSimilarMovies } from '../redux/AC';
import MovieCard from './MovieCard';

class SimilarMovies extends Component {
  componentDidMount() {
    this.props.loadSimilarMovies(this.props.movieId);
  }

  render() {
    return (
      <div>
        {this.props.movies.map((item) => {
          return <Col xs={6} md={3} key={item.id}>
            <MovieCard 
              id={item.id}
              title={item.title}
              imageSrc={item.poster_path}/>
          </Col>
        })}
      </div>
    );
  }
}

SimilarMovies.propTypes = {
  movieId: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired
};

export default connect((state) => {
  return {
    movies: state.similarMovies.movies
  }
}, {loadSimilarMovies})(SimilarMovies);