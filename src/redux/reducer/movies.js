import { Record } from 'immutable';
import { LOAD_POPULAR_MOVIES, START, SUCCESS, FAIL } from '../constants';

const PopularMoviesState = Record({
  page: null,
  totalPages: 0,
  loading: false,
  movies: []
});

const ReducerState = Record({
  popularMovies: new PopularMoviesState()
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

    default:
      return moviesState;
  }
}