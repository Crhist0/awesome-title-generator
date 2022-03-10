import { combineReducers } from '@reduxjs/toolkit';
import config from './ConfigSlice';
import modalExport from './ExportSlice';
import drawer from './DrawerSlice';
const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    config,
    modalExport,
    drawer,
  });

  return combinedReducer(state, action);
};

export default createReducer;
