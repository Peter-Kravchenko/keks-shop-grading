import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TProductData } from '../../types/state';
import { NameSpace } from '../../const';

export const getProduct = createSelector(
  (state: TAppState) => state[NameSpace.Product],
  (state: TProductData) => state.product
);

export const getFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Product],
  (state: TProductData) => state.fetchingStatus
);
