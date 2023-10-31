import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const';
import { TUserData } from '../../types/state';
import { checkAuth, login, logout, signUp } from '../api-actions';

const initialState: TUserData = {
  user: null,
  loginSendingStatus: RequestStatus.Idle,
  signUpSendingStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    resetSignUpSendingStatus: (state) => {
      state.signUpSendingStatus = RequestStatus.Idle;
    },
    resetLoginSendingStatus: (state) => {
      state.loginSendingStatus = RequestStatus.Idle;
    },
  },
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
        state.loginSendingStatus = RequestStatus.Pending;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loginSendingStatus = RequestStatus.Success;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.loginSendingStatus = RequestStatus.Rejected;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(signUp.pending, (state) => {
        state.signUpSendingStatus = RequestStatus.Pending;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.signUpSendingStatus = RequestStatus.Success;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(signUp.rejected, (state) => {
        state.signUpSendingStatus = RequestStatus.Rejected;
      });
  },
});

export const { resetSignUpSendingStatus, resetLoginSendingStatus } =
  userData.actions;
