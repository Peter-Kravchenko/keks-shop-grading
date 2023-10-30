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

export const getUserSendingStatus = createSelector(
  (state: TAppState) => state[NameSpace.User],
  (state: TUserData) => state.sendingStatus
);
