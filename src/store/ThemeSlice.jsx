import { createSlice } from '@reduxjs/toolkit';

const initialState = { mode: 'light' };

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => action.payload,
  },
});

export const { clearState, updateState, animateState } = slice.actions;

export default slice.reducer;
