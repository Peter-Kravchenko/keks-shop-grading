import { createSlice } from '@reduxjs/toolkit';
import { TReviewData } from '../../types/state';
import { fetchReviews, postReview } from '../api-actions';
import { NameSpace, RequestStatus } from '../../const';

const initialState: TReviewData = {
  reviews: [],
  review: [],
  fetchingStatus: RequestStatus.Idle,
  sendingStatus: RequestStatus.Idle,
};

export const reviewsData = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    resetReviewSendingStatus(state) {
      state.sendingStatus = RequestStatus.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      })
      .addCase(postReview.pending, (state) => {
        state.sendingStatus = RequestStatus.Pending;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.review = action.payload;
        state.sendingStatus = RequestStatus.Success;
      })
      .addCase(postReview.rejected, (state) => {
        state.sendingStatus = RequestStatus.Rejected;
      });
  },
});

export const { resetReviewSendingStatus } = reviewsData.actions;
