import {
  AuthorizationStatus,
  FilterRatingMap,
  ProductCategoryMap,
  ProductTypeMap,
  RequestStatus,
  SortDateMap,
} from '../const';
import { store } from '../store';
import { TCategories } from './categories';
import { TProduct } from './product';
import { TProducts } from './products';
import { TReview } from './review';
import { TUser } from './user';

export type TAppState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export type TAppProcess = {
  productsCountOnPage: number;
  reviewsCountOnPage: number;
  categories: TCategories;
  activeCategory: ProductCategoryMap | null;
  activeTypes: ProductTypeMap[];
  filterByRating: FilterRatingMap;
  sortByDate: SortDateMap;
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
  sendingStatus: RequestStatus;
};

export type TReviewData = {
  reviews: TReview[];
  review: TReview[];
  fetchingStatus: RequestStatus;
  sendingStatus: RequestStatus;
};

export type TLastReviewData = {
  lastReview: TReview | null;
  fetchingStatus: RequestStatus;
};

export type TUserData = {
  user: TUser | null;
  loginSendingStatus: RequestStatus;
  signUpSendingStatus: RequestStatus;
  authorizationStatus: AuthorizationStatus;
};
