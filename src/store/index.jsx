import { configureStore } from '@reduxjs/toolkit';
import createReducer from './rootReducer';

const store = configureStore({
  reducer: createReducer(),
});

export default store;
