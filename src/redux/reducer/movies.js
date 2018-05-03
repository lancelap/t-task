import { Record } from 'immutable';
import { LOAD_POPULAR_MOVIES, START, SUCCESS, FAIL } from '../constants'

const ReducerState = Record({
  page: undefined,
  totalResults: undefined,
  totalPages: undefined,
  loading: false,
  loaded: false,
  entities: []
});

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_POPULAR_MOVIES + START:
      return moviesState.set('loading', true)

    case LOAD_POPULAR_MOVIES + SUCCESS:
      return moviesState
        .set('loaded', true)
        .set('loading', false)
        .set('page', payload.page)
        .set('totalResults', payload.total_results)
        .set('totalPages', payload.total_pages)
        .set('entities', payload.results)
  
    case LOAD_POPULAR_MOVIES + FAIL:
      return moviesState
        .set('loaded', false)
        .set('loading', false)

    default:
      return moviesState;
  }
}