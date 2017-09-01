import { applyMiddleware, createStore, compose } from 'redux';
import loggerMiddleware from 'redux-logger'; // to log the redux state
import thunkMiddleware from 'redux-thunk'; // to let dispatch function
import catsReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    return createStore(
      catsReducer,
      preloadedState,
      composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ))
    )
}