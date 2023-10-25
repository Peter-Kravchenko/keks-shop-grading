export type TUserReviewData = {
  name: string;
  avatarUrl: string;
};

export type TUserData = {
  email: string;
  token: string;
} & TUserReviewData;
