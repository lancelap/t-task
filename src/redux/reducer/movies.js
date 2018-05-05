import { Record, Map } from 'immutable';
import { LOAD_POPULAR_MOVIES, START, SUCCESS, FAIL, LOAD_MOVIE_DETAILS } from '../constants';

const PopularMoviesState = Record({
  page: null,
  totalPages: 0,
  loading: false,
  movies: []
});

// const movieDetails = Record({
//   loading: false,
// })

const ReducerState = Record({
  popularMovies: new PopularMoviesState(),
  movieDetails: new Map({})
})

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_POPULAR_MOVIES + START:
      return moviesState.setIn(['popularMovies', 'loading'], true)

    case LOAD_POPULAR_MOVIES + SUCCESS:
      return moviesState
        .setIn(['popularMovies', 'loading'], false)
        .setIn(['popularMovies', 'page'], payload.response.page)
        .setIn(['popularMovies', 'totalPages'], payload.response.total_pages)
        .setIn(['popularMovies', 'movies'], payload.response.results)

    case LOAD_POPULAR_MOVIES + FAIL:
      return moviesState.setIn(['popularMovies', 'loading'], false)

    case LOAD_MOVIE_DETAILS + START: 
      return moviesState.setIn(['movieDetails', 'loading'], true)

    case LOAD_MOVIE_DETAILS + SUCCESS:
      return moviesState
        .setIn(['movieDetails', 'loading'], false)
        .setIn(['movieDetails', 'entity'], payload.response)

    case LOAD_MOVIE_DETAILS + FAIL:
      return moviesState.setIn(['movieDetails', 'loading'], false)

    default:
      return moviesState;
  }
}