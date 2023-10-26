export type TUserReview = {
  name: string;
  avatarUrl?: string;
};

export type TUser = {
  email: string;
  token: string;
} & TUserReview;
