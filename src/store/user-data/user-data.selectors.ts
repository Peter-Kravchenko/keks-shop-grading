import { createSelector } from '@reduxjs/toolkit';
import { TAppState, TUserData } from '../../types/state';
import { NameSpace } from '../../const';

export const getUser = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.user
);

export const getAuthStatus = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.authorizationStatus
);

export const getSignUpSendingStatus = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.signUpSendingStatus
);

export const getLoginSendingStatus = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.loginSendingStatus
);
