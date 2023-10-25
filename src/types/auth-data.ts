export type TAuthData = {
  email: string;
  password: string;
};

export type TSignInData = {
  name: string;
} & TAuthData;
