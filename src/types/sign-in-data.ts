import { TAuthData } from './auth-data';

export type TSignUpData = {
  name: string;
  avatarUrl?: string;
} & TAuthData;
