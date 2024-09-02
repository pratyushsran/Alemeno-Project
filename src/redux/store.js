import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './coursesSlice';

// Set up Redux store
const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;
