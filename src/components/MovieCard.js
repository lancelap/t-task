import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const {imageSrc, title, id} = this.props;

    return <Link to={`/movie/${id}`}>
        <Image  
          width="185px"
          height="278px"
          alt={title} 
          title={title} 
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${imageSrc}`} />
    </Link>
  }
}

MovieCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default MovieCard;