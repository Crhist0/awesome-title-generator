import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  selected: undefined,
};

const slice = createSlice({
  name: 'modalExport',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => {
      let { selected, changes } = action.payload;
      return { selected, active: changes };
    },
  },
});

export const { clearState, updateState } = slice.actions;

export default slice.reducer;
