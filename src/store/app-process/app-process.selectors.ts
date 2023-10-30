import { createSelector } from '@reduxjs/toolkit';
import { TAppProcess, TAppState } from '../../types/state';
import { NameSpace } from '../../const';

export const getProductsCounOnPage = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.productsCountOnPage
);

export const getReviewsCountOnPage = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.reviewsCountOnPage
);
