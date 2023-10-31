import { TAuthData } from './auth-data';

export type TSignUpData = {
  name: string;
  avatar?: File | null;
} & TAuthData;
