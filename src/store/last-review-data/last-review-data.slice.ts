import { createSlice } from '@reduxjs/toolkit';
import { TLastReviewData } from '../../types/state';
import { fetchLastReview } from '../api-actions';
import { NameSpace, RequestStatus } from '../../const';

const initialState: TLastReviewData = {
  lastReview: null,
  fetchingStatus: RequestStatus.Idle,
};

export const lastReviewData = createSlice({
  name: NameSpace.LastReview,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLastReview.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchLastReview.fulfilled, (state, action) => {
        state.lastReview = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchLastReview.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      });
  },
});
