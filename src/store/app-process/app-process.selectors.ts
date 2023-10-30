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

export const getCategories = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.categories
);

export const getActiveCategory = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.activeCategory
);

export const getActiveType = createSelector(
  (state: TAppState) => state[NameSpace.App],
  (state: TAppProcess) => state.activeTypes
);
