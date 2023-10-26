import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TLastReviewData } from '../../types/state';
import { NameSpace } from '../../const';

export const getLastReview = createSelector(
  (state: TAppState) => state[NameSpace.LastReview],
  (state: TLastReviewData) => state.lastReview
);

export const getFetchingStatus = createSelector(
  (state: TAppState) => state[NameSpace.LastReview],
  (state: TLastReviewData) => state.fetchingStatus
);
