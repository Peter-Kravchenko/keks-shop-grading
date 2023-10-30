import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, ProductsCount, ReviewsCount } from '../../const';

const initialState = {
  productsCountOnPage: ProductsCount.onFirstLoad,
  reviewsCountOnPage: ReviewsCount.onFirstLoad,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    showMoreProductsAction: (state) => {
      state.productsCountOnPage += ProductsCount.onShowMoreClick;
    },
    resetProductsCountAction: (state) => {
      state.productsCountOnPage = ProductsCount.onFirstLoad;
    },
    showMoreReviewsAction: (state) => {
      state.reviewsCountOnPage += ReviewsCount.onShowMoreClick;
    },
    resetReviewsCountAction: (state) => {
      state.reviewsCountOnPage = ReviewsCount.onFirstLoad;
    },
  },
});

export const {
  showMoreProductsAction,
  resetProductsCountAction,
  showMoreReviewsAction,
  resetReviewsCountAction,
} = appProcess.actions;
