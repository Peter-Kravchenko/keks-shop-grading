import { TUserReviewData } from './user-data';

export type TReview = {
  id: string;
  isoDate: string;
  user: TUserReviewData;
  positive: string;
  negative: string;
  rating: number;
};
