import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SimilarMovie extends Component {
  render() {
    const {imageSrc, title, id} = this.props;

    return <Link to={`/movie/${id}`}>
        <Image 
          thumbnail 
          width="185px"
          height="278px"
          alt={title} 
          title={title} 
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${imageSrc}`} />
    </Link>
  }
}

SimilarMovie.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default SimilarMovie;