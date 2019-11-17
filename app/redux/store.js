import { createStore, applyMiddleware } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './combineReducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, createPromise())));

export default store;
