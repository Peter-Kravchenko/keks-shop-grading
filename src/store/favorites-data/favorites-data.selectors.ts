import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TFavoritesData } from '../../types/state';
import { NameSpace } from '../../const';

export const getFavorites = createSelector(
  (state: TAppState) => state[NameSpace.Favorites],
  (state: TFavoritesData) => state.favorites
);

export const getFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Favorites],
  (state: TFavoritesData) => state.fetchingStatus
);

export const getSendingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Favorites],
  (state: TFavoritesData) => state.sendingStatus
);
