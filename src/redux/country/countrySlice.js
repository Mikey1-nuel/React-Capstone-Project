import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  county: [],
};

const CountrySLice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default CountrySLice.reducer;
