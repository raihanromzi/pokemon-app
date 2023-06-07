import { createSlice } from '@reduxjs/toolkit';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../database/firebase';

const initialState = {
  favorites: []
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      const { id, name, url } = action.payload;
      addDoc(collection(db, 'favorites'), { id, name, url });
    },
    removeFavorite: (state, action) => {
      deleteDoc(doc(db, 'favorites', action.payload.firestoreId));
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.id);
    }
  }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favReducer = favoriteSlice.reducer;
