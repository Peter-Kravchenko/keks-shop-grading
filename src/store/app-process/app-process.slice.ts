import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  FilterRatingMap,
  NameSpace,
  ProductCategoryMap,
  ProductTypeMap,
  ProductsCount,
  ReviewsCount,
  SortDateMap,
} from '../../const';
import { fetchCategories } from '../api-actions';
import { TAppProcess } from '../../types/state';

const initialState: TAppProcess = {
  productsCountOnPage: ProductsCount.onFirstLoad,
  reviewsCountOnPage: ReviewsCount.onFirstLoad,
  categories: [],
  activeCategory: null,
  activeTypes: [],
  filterByRating: FilterRatingMap.All,
  sortByDate: SortDateMap.Increase,
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
    setActiveCategory: (state, action: PayloadAction<ProductCategoryMap>) => {
      state.activeCategory = action.payload;
      state.activeTypes = [];
    },
    setActiveType: (state, action: PayloadAction<ProductTypeMap>) => {
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
    setActiveFilterByRating: (
      state,
      action: PayloadAction<FilterRatingMap>
    ) => {
      state.filterByRating = action.payload;
    },
    setActiveSortByDate: (state, action: PayloadAction<SortDateMap>) => {
      state.sortByDate = action.payload;
    },
    resetFilterSortReviews: (state) => {
      state.filterByRating = FilterRatingMap.All;
      state.sortByDate = SortDateMap.Increase;
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
  setActiveFilterByRating,
  setActiveSortByDate,
  resetFilterSortReviews,
} = appProcess.actions;
