import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const slice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => action.payload,
  },
});

export const { clearState, updateState, animateState } = slice.actions;

export default slice.reducer;
