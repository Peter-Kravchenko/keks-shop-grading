import { createSlice } from '@reduxjs/toolkit';
import { TProductsData } from '../../types/state';
import { fetchProducts } from '../api-actions';
import { NameSpace, RequestStatus } from '../../const';

const initialState: TProductsData = {
  products: [],
  fetchingStatus: RequestStatus.Idle,
};

export const productsData = createSlice({
  name: NameSpace.Products,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      });
  },
});
