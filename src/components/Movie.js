import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row, PageHeader, Media, Label } from 'react-bootstrap';
import { loadMovieDetails } from '../redux/AC';

class PopularMovie extends Component {
  componentDidMount() {
    this.props.loadMovieDetails(this.props.id);
  }

  render() {
    if(this.props.loading || this.props.loading === undefined) return <h3>loading...</h3>;
    const {title, overview, poster_path, release_date, genres} = this.props.movieDetails;

    return (
      <Grid>
      <Row className="show-grid">
        <Col xs={12}>
          <PageHeader>
            {title}
          </PageHeader>
        </Col>
        <Col xs={12} md={10}>
          <Media>
            <Media.Left>
              <img 
                className="media-object" 
                width="300px"
                height="450px"
                alt={title}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}/>
            </Media.Left>
            <Media.Body>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <div>
                {genres.map((item) => {
                  return (
                    <span key={item.id}>
                      <Label bsStyle="primary">
                        {item.name}
                      </Label>{' '}
                    </span>
                  )
                })}
              </div>
              <h3>Release date</h3>
              <b>{release_date}</b>
            </Media.Body>
          </Media>
        </Col>
        <Col xs={12}>
          <h3>Recommendations</h3>
        </Col>
      </Row>
    </Grid>
    );
  }
}



export default connect(({movies: {movieDetails}}) => {
  return {
    loading: movieDetails.get('loading'),
    movieDetails: movieDetails.get('entity')
  }
}, {loadMovieDetails})(PopularMovie);