import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Pager,
  Grid,
  Col,
  Row,
  PageHeader,
  Button,
  Media
} from 'react-bootstrap';
import MovieCard from './MovieCard';
import SearchForm from './SearchForm';

class MovieList extends Component {
  componentDidMount() {
    const { page, query } = this.props;
    this.props.loadMovies(page, query);
  }

  componentWillReceiveProps({ page, loadMovies, query }) {
    loadMovies(page, query);
  }

  render() {
    return (
      <Grid>
        <Row className='show-grid'>
          <Col xs={12}>
            <SearchForm search={this.props.search} />
          </Col>
          <Col xs={12}>
            <PageHeader>Popular Movies</PageHeader>
          </Col>
          <Col xs={12}>{this.getPagination()}</Col>
          <Col xs={12} md={10}>
            {this.props.loading === false ? (
              this.getMoviesItems(this.props.movies)
            ) : (
              <h3>Loading...</h3>
            )}
          </Col>
          <Col xs={12}>{this.getPagination()}</Col>
        </Row>
      </Grid>
    );
  }

  getMoviesItems(movies) {
    const movieItems = movies.map(item => {
      return (
        <Media key={item.id}>
          <Media.Left>
            <MovieCard
              title={item.title}
              imageSrc={item.poster_path}
              id={item.id}
            />
          </Media.Left>
          <Media.Body>
            <h4 className='media-heading'>{item.title}</h4>
            <p>{item.overview}</p>
            <Link to={`/movie/${item.id}`}>
              <Button bsStyle='info'>More Info</Button>
            </Link>
          </Media.Body>
        </Media>
      );
    });

    return movieItems;
  }

  getPagination() {
    const { totalPages, loading } = this.props;
    const page = +this.props.page;

    return (
      <Pager>
        <li className={page <= 1 || loading ? 'disabled' : ''}>
          <Link
            tabIndex={page <= 1 || loading ? -1 : 1}
            style={page <= 1 || loading ? { pointerEvents: 'none' } : {}}
            to={'/popular/' + (+page - 1)}
            key={page}
          >
            Previous Page
          </Link>
        </li>{' '}
        <li className={page === totalPages || loading ? 'disabled' : ''}>
          <Link
            tabIndex={page === totalPages || loading ? -1 : 1}
            style={
              page === totalPages || loading ? { pointerEvents: 'none' } : {}
            }
            to={'/popular/' + (+page + 1)}
            key={page}
          >
            Next Page
          </Link>
        </li>
      </Pager>
    );
  }
}

MovieList.propTypes = {
  page: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  movies: PropTypes.array,
  totalPages: PropTypes.number,
  loadMovies: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

MovieList.defaultProps = {
  loading: false,
  movies: [],
  totalPages: 0
};

export default MovieList;
