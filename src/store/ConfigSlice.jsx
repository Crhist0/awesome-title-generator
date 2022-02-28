import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  offsetX: 8,
  offsetY: 8,
  offsetZ: 12,
  blurRadius: 2,
  shadowColor: 'grey',
  textTransform: 'uppercase',
  fontFamily: 'Fredoka',
  align: 'center',
  size: 82,
  radius: 500,
  circle: false,
  bold: false,
  text: 'Your Awesome Text Generator',
};

const slice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    clearState: (state, action) => initialState,
    updateState: (state, action) => {
      let { name, changes } = action.payload;
      switch (name) {
        case 'offsetX':
          return { ...state, offsetX: changes };
        case 'offsetY':
          return { ...state, offsetY: changes };
        case 'offsetZ':
          return { ...state, offsetZ: changes };
        case 'blurRadius':
          return { ...state, blurRadius: changes };
        case 'shadowColor':
          return { ...state, shadowColor: changes };
        case 'textTransform':
          return { ...state, textTransform: changes };
        case 'align':
          return { ...state, align: changes };
        case 'fontFamily':
          return { ...state, fontFamily: changes };
        case 'size':
          return { ...state, size: changes };
        case 'radius':
          return { ...state, radius: changes };
        case 'text':
          return { ...state, text: changes };
        case 'circle':
          return { ...state, circle: changes };
        case 'bold':
          return { ...state, bold: changes };
        default:
          break;
      }
    },
  },
});

export const { clearState, updateState } = slice.actions;

export default slice.reducer;
