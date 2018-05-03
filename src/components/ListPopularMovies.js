import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pager, Grid, Col, Row, PageHeader, Button, Media } from 'react-bootstrap';
import { loadPopularMovies } from '../redux/AC';

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
              <img 
                className="media-object" 
                width="185px"
                height="278px"
                alt={item.title}
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`}/>
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
  loading: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  movies: PropTypes.array.isRequired,
  loadedPage: PropTypes.number,
  totalPages: PropTypes.number,
  totalResults: PropTypes.number,
}

export default connect(({movies}) => {
  return {
    loading: movies.loading,
    loaded: movies.loaded,
    loadedPage: movies.page,
    movies: movies.entities,
    totalPages: movies.totalPages,
    totalResults: movies.totalResults,
  }
}, {loadPopularMovies})(ListPopularMovies);