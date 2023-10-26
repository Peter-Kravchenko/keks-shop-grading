import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { productsData } from './products-data/products-data.slice';
import { productData } from './product-data/product-data.slice';
import { reviewsData } from './reviews-data/reviews-data.slice';
import { lastReviewData } from './last-review-data/last-review-data.slice';
import { userData } from './user-data/user-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.Products]: productsData.reducer,
  [NameSpace.Product]: productData.reducer,
  [NameSpace.Reviews]: reviewsData.reducer,
  [NameSpace.LastReview]: lastReviewData.reducer,
  [NameSpace.User]: userData.reducer,
});
