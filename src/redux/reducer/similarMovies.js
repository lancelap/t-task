import { Record } from 'immutable';
import { LOAD_SIMILAR_MOVIES, SUCCESS } from '../constants';

const ReducerState = Record({
  movies: []
});

const defaultState = new ReducerState();

export default (moviesState = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case LOAD_SIMILAR_MOVIES + SUCCESS:
      return moviesState
        .set('movies', payload.response.results)
    default:
      return moviesState;
  }
}