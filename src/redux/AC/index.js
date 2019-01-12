import { START, SUCCESS, FAIL, LOAD_POPULAR_MOVIES, LOAD_MOVIE_DETAILS, LOAD_SIMILAR_MOVIES, SEARCH_MOVIE } from '../constants';

export function loadMovieDetails(id) {
  return (dispatch, getState) => {
    dispatch({
      type: LOAD_MOVIE_DETAILS + START,
      payload: { id }
    })

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6108a68e8023a97f3bdd93fb1650c322&language=en-US`)
    .then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(response => {
      dispatch({
        type: LOAD_MOVIE_DETAILS + SUCCESS,
        payload: { id, response }
      })
    })
    .catch(error => {
      dispatch({
        type: LOAD_MOVIE_DETAILS + FAIL,
        payload: { id, error }
      })
    })
  }
}

export function loadSimilarMovies(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_SIMILAR_MOVIES + START,
      payload: { id }
    })
    const apiKey = '6108a68e8023a97f3bdd93fb1650c322';
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`;

    fetch(url)
    .then(res => {
      if (res.status >= 400) {
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(response => {
      dispatch({
        type: LOAD_SIMILAR_MOVIES + SUCCESS,
        payload: { id, response }
      })
    })
    .catch(error => {
      dispatch({
        type: LOAD_SIMILAR_MOVIES + FAIL,
        payload: { id, error }
      })
    })
  }
}


export function loadPopularMovies(page, query = 'star') {
  return (dispatch, getState) => {
    const {movies: {popularMovies}} = getState();
    if (popularMovies.loading || +popularMovies.page === +page ) return;
    
    
    const apiKey = '6108a68e8023a97f3bdd93fb1650c322';
    let url = '';
    if(query !== '') {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`;
    }
    url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=star`;

    dispatch({
      type: LOAD_POPULAR_MOVIES + START,
      payload: { page }
    })

    setTimeout(() => { fetch(url)
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
    }, 1000)
  }
}

export function searchMovie (page, query = 'star') {
  return (dispatch, getState) => {
    const {searchMovie} = getState();
    if (searchMovie.loading || +searchMovie.page === +page ) return;
    
    const apiKey = '6108a68e8023a97f3bdd93fb1650c322';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`;

    dispatch({
      type: SEARCH_MOVIE + START,
      payload: { page }
    })

    setTimeout(() => { fetch(url)
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(response => {
        dispatch({
          type: SEARCH_MOVIE + SUCCESS,
          payload: { page, response }
        })
      })
      .catch(error => {
        dispatch({
          type: SEARCH_MOVIE + FAIL,
          payload: { page, error }
        })
      })
    }, 1000)
  }
}
