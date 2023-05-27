// going to create Single Source of Truth with configureStore
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';

const store = configureStore({
  reducer: reducers,
  devTools: true, // This enables Redux DevTools extension
});

export default store;