import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const';
import { TUserData } from '../../types/state';
import { checkAuth, login, logout } from '../api-actions';

const initialState: TUserData = {
  user: null,
  sendingStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.pending, (state) => {
        state.sendingStatus = RequestStatus.Pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.sendingStatus = RequestStatus.Success;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.sendingStatus = RequestStatus.Rejected;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
