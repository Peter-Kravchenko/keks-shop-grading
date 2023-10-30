import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TProductsData } from '../../types/state';
import { NameSpace } from '../../const';

export const getProducts = createSelector(
  (state: TAppState) => state[NameSpace.Products],
  (state: TProductsData) => state.products
);

export const getProductsFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Products],
  (state: TProductsData) => state.fetchingStatus
);
