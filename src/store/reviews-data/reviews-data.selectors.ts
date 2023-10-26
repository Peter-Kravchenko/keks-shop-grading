import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TReviewData } from '../../types/state';
import { NameSpace } from '../../const';

export const getReviews = createSelector(
  (state: TAppState) => state[NameSpace.Reviews],
  (state: TReviewData) => state.reviews
);

export const getFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Reviews],
  (state: TReviewData) => state.fetchingStatus
);

export const getSendingStatus = createSelector(
  (state: TAppState) => state[NameSpace.Reviews],
  (state: TReviewData) => state.sendingStatus
);
