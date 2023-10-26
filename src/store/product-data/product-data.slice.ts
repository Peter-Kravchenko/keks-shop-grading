import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TProductData } from '../../types/state';
import { fetchProduct } from '../api-actions';

const initialState: TProductData = {
  product: null,
  fetchingStatus: RequestStatus.Idle,
};

export const productData = createSlice({
  name: NameSpace.Product,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.fetchingStatus = RequestStatus.Pending;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.fetchingStatus = RequestStatus.Success;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.fetchingStatus = RequestStatus.Rejected;
      });
  },
});
