export const TITLE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

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
  Catalog = '/catalog',
  Error = '/errorPage',
  Favorites = '/favourites',
  Login = '/login',
  Main = '/index',
  NotFound = '/404',
  Product = '/productpage',
  SignUp = '/signup',
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

export enum defaultCoordinates {
  latitude = 59.966,
  longitude = 30.3,
  zoom = 14,
}

export const ProductImgSize = {
  Small: { width: 241, height: 245 },
  Large: { width: 326, heigh: 332 },
} as const;

export const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

export const locations = [
  {
    id: 'first-confectionery',
    name: 'Кондитерская 1',
    address: 'ул. Профессора Попова',
    latitude: 59.970969,
    longitude: 30.316252,
    icon: '/img/content/map-marker2.svg',
  },
  {
    id: 'second-confectionery',
    name: 'Кондитерская 2',
    address: 'Вязовая ул.',
    latitude: 59.967947,
    longitude: 30.274708,
    icon: '/img/content/map-marker2.svg',
  },
  {
    id: 'production',
    name: 'Производство',
    address: 'ул. Ленина, 10',
    latitude: 59.96038,
    longitude: 30.308725,
    icon: '/img/content/map-marker1.svg',
  },
];
