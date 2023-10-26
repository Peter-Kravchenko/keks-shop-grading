export enum ReviewLength {
  Min = 5,
  Max = 500,
}

export enum ProductCategory {
  Bisque = 'bisque',
  Cheesecake = 'cheesecake',
  Shortbread = 'shortbread',
  Dessert = 'dessert',
}

export enum ProductType {
  Chocolate = 'chocolate',
  Vanilla = 'vanilla',
  Vegetarian = 'vegetarian',
  HoneyCake = 'honey-cake',
  Lemon = 'lemon',
  NewYork = 'new-york',
  Tart = 'tart',
  FunnelCake = 'funnel-cake',
  BasketCake = 'basket-cake',
  ChocolateMuffin = 'chocolate-muffin',
  BrandMuffin = 'brand-muffin',
}

export enum AppRoute {
  Catalog = '/Catalog',
  Error = '/ErrorPage',
  Favorites = '/Favourites',
  Login = '/login',
  Main = '/Index',
  NotFound = '/404',
  Product = '/ProductPage',
  SignUp = '/SignUp',
}

export enum APIRoute {
  Categories = '/categories',
  Favorites = '/favorites',
  Login = '/users/login',
  Logout = '/users/logout',
  Products = '/products',
  Reviews = '/reviews',
  LastReview = '/reviews/getLast',
  SignUp = '/users/registration',
  UploadImg = '/users/upload',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Rejected = 'Rejected',
}

export enum NameSpace {
  App = 'APP',
  Favorites = 'FAVORITES',
  LastReview = 'LAST_REVIEW',
  Product = 'PRODUCT',
  Products = 'PRODUCTS',
  Reviews = 'REVIEWS',
  User = 'USER',
}

export enum ProductBlock {
  Catalog = 'catalog__item',
  Main = 'random-main__item',
}

export const ProductImgSize = {
  Small: { width: 241, height: 245 },
  Large: { width: 326, heigh: 332 },
} as const;
