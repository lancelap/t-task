import { START, SUCCESS, FAIL, LOAD_POPULAR_MOVIES } from '../constants';

export function loadPopularMovies(page = 1) {
  return (dispatch, getState) => {
    const {movies: {popularMovies}} = getState();
    if (popularMovies.loading  || Number(popularMovies.page) === Number(page)) return;
    
    dispatch({
      type: LOAD_POPULAR_MOVIES + START,
      payload: { page }
    })

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6108a68e8023a97f3bdd93fb1650c322&language=en-US&page=${page}`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(response => {
      dispatch({
        type: LOAD_POPULAR_MOVIES + SUCCESS,
        payload: { page, response }
      })
    })
    .catch(error => {
      dispatch({
        type: LOAD_POPULAR_MOVIES + FAIL,
        payload: { page, error }
      })
    })
  }
} 