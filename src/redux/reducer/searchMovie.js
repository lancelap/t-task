import { Record } from 'immutable';
import { SEARCH_MOVIE, START , SUCCESS, FAIL} from '../constants';

const MoviesState = Record({
  page: null,
  totalPages: 0,
  loading: false,
  movies: []
}); 

const defaultState = new MoviesState();

export default (searchState = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_MOVIE + START:
      return searchState.set('loading', true)

    case SEARCH_MOVIE + SUCCESS:
      return searchState
        .set('loading', false)
        .set('page', payload.response.page)
        .set('totalPages', payload.response.total_pages)
        .set('movies', payload.response.results)

    case SEARCH_MOVIE + FAIL:
      return searchState.set('loading', false)

    default:
      return searchState;
  }
}