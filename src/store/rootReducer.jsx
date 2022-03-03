import { combineReducers } from '@reduxjs/toolkit';
import config from './ConfigSlice';
import modalExport from './ExportSlice';
const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    config,
    modalExport,
  });

  return combinedReducer(state, action);
};

export default createReducer;
