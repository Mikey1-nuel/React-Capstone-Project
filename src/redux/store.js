import { configureStore } from '@reduxjs/toolkit';
import continentReducer, { getContinent } from './country/countrySlice';

const store = configureStore({
  reducer: {
    continent: continentReducer,
  },
});
store.dispatch(getContinent());

export default store;
