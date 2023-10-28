import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TFavoritesData } from '../../types/state';
import { addToFavorite, deleteFavorite, fetchFavorites } from '../api-actions';

const initialState: TFavoritesData = {
  favorites: [],
  fetchingStatus: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      })
      .addCase(addToFavorite.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(addToFavorite.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (product) => product.id !== action.payload.id
        );
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(deleteFavorite.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      });
  },
});
