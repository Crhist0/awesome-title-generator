import { combineReducers } from '@reduxjs/toolkit';
import config from './ConfigSlice';

const createReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    config,
  });

  return combinedReducer(state, action);
};

export default createReducer;
