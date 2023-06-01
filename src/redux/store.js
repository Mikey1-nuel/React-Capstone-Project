import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import continentReducer, { getContinent } from './country/countrySlice';

const reducer = combineReducers({
  continentReducer,
});
const store = createStore(
  reducer,

  applyMiddleware(thunk, logger),
);
store.dispatch(getContinent());

export default store;
