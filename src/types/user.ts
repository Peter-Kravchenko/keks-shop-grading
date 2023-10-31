export type TUserReview = {
  name: string;
  avatarUrl?: string;
};

export type TUser = {
  email: string;
  token: string;
} & TUserReview;

export type TUserAvatarData = {
  token: string;
  avatar?: File;
  avatarUrl?: string;
};
