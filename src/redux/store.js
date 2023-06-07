import { configureStore } from '@reduxjs/toolkit';
import { favReducer, addFavorite, removeFavorite } from './favoriteSlice';

const store = configureStore({
  reducer: {
    favorite: favReducer
  }
});

export { store, addFavorite, removeFavorite };
