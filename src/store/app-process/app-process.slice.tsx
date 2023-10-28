import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const PRODUCTS_ON_FIRST_LOAD = 6;
const PRODUCTS_ON_SHOW_MORE_CLICK = 6;

const initialState = {
  productsCountOnPage: PRODUCTS_ON_FIRST_LOAD,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    showMoreProductsAction: (state) => {
      state.productsCountOnPage += PRODUCTS_ON_SHOW_MORE_CLICK;
    },
    resetProductsCountAction: (state) => {
      state.productsCountOnPage = PRODUCTS_ON_FIRST_LOAD;
    },
  },
});

export const { showMoreProductsAction, resetProductsCountAction } =
  appProcess.actions;
