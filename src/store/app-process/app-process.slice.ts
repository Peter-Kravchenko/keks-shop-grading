import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  NameSpace,
  ProductCategory,
  ProductType,
  ProductsCount,
  ReviewsCount,
} from '../../const';
import { fetchCategories } from '../api-actions';
import { TAppProcess } from '../../types/state';

const initialState: TAppProcess = {
  productsCountOnPage: ProductsCount.onFirstLoad,
  reviewsCountOnPage: ReviewsCount.onFirstLoad,
  categories: [],
  activeCategory: null,
  activeTypes: [],
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
    setActiveCategory: (state, action: PayloadAction<ProductCategory>) => {
      state.activeCategory = action.payload;
      state.activeTypes = [];
    },
    setActiveType: (state, action: PayloadAction<ProductType>) => {
      if (state.activeTypes.includes(action.payload)) {
        state.activeTypes = state.activeTypes.filter(
          (type) => type !== action.payload
        );
      } else {
        state.activeTypes = [...state.activeTypes, action.payload];
      }
    },
    resetProductFilters: (state) => {
      state.activeCategory = null;
      state.activeTypes = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const {
  showMoreProductsAction,
  resetProductsCountAction,
  showMoreReviewsAction,
  resetReviewsCountAction,
  setActiveCategory,
  setActiveType,
  resetProductFilters,
} = appProcess.actions;
