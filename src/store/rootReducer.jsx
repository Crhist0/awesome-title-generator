import { combineReducers } from '@reduxjs/toolkit';
import config from './ConfigSlice';
import modalExport from './ExportSlice';
import drawer from './DrawerSlice';
import theme from './ThemeSlice';
const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    config,
    modalExport,
    drawer,
  });

  return combinedReducer(state, action);
};

export default createReducer;
