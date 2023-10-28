import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store';
import { TProduct } from './product';
import { TProducts } from './products';
import { TReview } from './review';
import { TUser } from './user';

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export type TAppProcess = {
  productsCountOnPage: number;
};

export type TProductsData = {
  products: TProducts[];
  fetchingStatus: RequestStatus;
};
export type TProductData = {
  product: TProduct | null;
  fetchingStatus: RequestStatus;
};

export type TFavoritesData = {
  favorites: TProduct[];
  fetchingStatus: RequestStatus;
};

export type TReviewData = {
  reviews: TReview[];
  fetchingStatus: RequestStatus;
  sendingStatus: RequestStatus;
};

export type TLastReviewData = {
  lastReview: TReview | null;
  fetchingStatus: RequestStatus;
};

export type TUserData = {
  user: TUser | null;
  sendingStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
};
