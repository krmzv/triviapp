import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import state from './index';


const composedMiddleware = [
  applyMiddleware(thunk)
];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__
  && composedMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default function configureStore(initialState) {
  return createStore(
    combineReducers({ state }),
    initialState,
    compose(...composedMiddleware)
  )
}