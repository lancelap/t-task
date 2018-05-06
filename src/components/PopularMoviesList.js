import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pager, Grid, Col, Row, PageHeader, Button, Media } from 'react-bootstrap';
import { loadPopularMovies } from '../redux/AC';
import MovieCard from './MovieCard';

class ListPopularMovies extends Component {
  componentDidMount() {
    this.props.loadPopularMovies(this.props.page);
  }

  componentWillReceiveProps({ page, loadPopularMovies }) {
    loadPopularMovies(page);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <PageHeader>
              Popular Movies
            </PageHeader>
          </Col>
          <Col xs={12}>
            {this.getPagination()}
          </Col>
          <Col xs={12} md={10}>
          {this.getMoviesItems(this.props.movies)}
          </Col>
          <Col xs={12}>
            {this.getPagination()}
          </Col>
        </Row>
      </Grid>
    );
  }

  getMoviesItems(movies) {
    const movieItems = movies.map((item) => {
      return (
          <Media key={item.id}>
            <Media.Left>
            <MovieCard
                title={item.title}
                imageSrc={item.poster_path}
                id={item.id}/>
            </Media.Left>
            <Media.Body>
              <h4 className="media-heading">{item.title}</h4>
              <p>{item.overview}</p>
              <Link to={`/movie/${item.id}`}>
                <Button bsStyle="info">More Info</Button>
              </Link>
            </Media.Body>
          </Media>
      )
    })

    return movieItems;
  }

  getPagination() {
    const {totalPages, loading} = this.props;
    const page = +this.props.page;

    return (
      <Pager>
        <li className={page <= 1 || loading ? "disabled" : ""}>
          <Link 
            tabIndex={page <= 1 || loading ? -1 : 1} 
            style={page <= 1 || loading ? {'pointerEvents': 'none'} : {}} 
            to={'/popular/' + (+page - 1)} 
            key={page}>Previous Page
          </Link>
        </li>
        {' '}
        <li  className={page === totalPages || loading ? "disabled" : ""} >
        <Link 
            tabIndex={page === totalPages || loading ? -1 : 1} 
            style={page === totalPages || loading ? {'pointerEvents': 'none'} : {}} 
            to={'/popular/' + (+page + 1)} 
            key={page}>Next Page
          </Link>
        </li>
      </Pager>
    )
  }
}

ListPopularMovies.propTypes = {
  page: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  movies: PropTypes.array,
  totalPages: PropTypes.number
}

ListPopularMovies.defaultProps = {
  loading: false,
  movies: [],
  totalPages: 0
}

export default connect(({movies: {popularMovies}}, {page}) => {
  return {
    loading: popularMovies.loading,
    movies: popularMovies.movies,
    totalPages: popularMovies.totalPages,
  }
}, {loadPopularMovies})(ListPopularMovies);