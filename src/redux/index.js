import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import history from '../history';

const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);

const store = createStore(reducer, enhancer);
window.store = store;

export default store;
