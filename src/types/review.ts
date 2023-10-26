import { TUserReview } from './user';

export type TPostReview = {
  positive: string;
  negative: string;
  rating: number;
};
export type TReview = {
  id: string;
  isoDate: string;
  user: TUserReview;
} & TPostReview;
