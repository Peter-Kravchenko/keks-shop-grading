export const TITLE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const MAX_COMMENT_LENGTH = 500;

export const DESCRIPTION_LENGTH = 140;

export const stars: number[] = [1, 2, 3, 4, 5];

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

export enum AppRoute {
  Catalog = '/catalog',
  Error = '/error-page',
  Favorites = '/favourites',
  Login = '/login',
  Main = '/',
  NotFound = '/404',
  Product = '/product-page',
  SignUp = '/sign-up',
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

export enum RatingBlock {
  Review = 'review',
  Product = 'product',
}

export enum DefaultCoordinates {
  Latitude = 59.966,
  Longitude = 30.3,
  Zoom = 14,
}

export enum ProductsCount {
  OnFirstLoad = 6,
  OnShowMoreClick = 6,
}

export enum ReviewsCount {
  OnFirstLoad = 2,
  OnShowMoreClick = 2,
}

export enum FilterRatingMap {
  All = 'Любой',
  High = 'Высокий',
  Low = 'Низкий',
}

export enum SortDateMap {
  Increase = 'inc',
  Decrease = 'desc',
}

export const ratingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
} as const;

export enum ProductCategoryMap {
  Bisque = 'bisque',
  Cheesecake = 'cheesecake',
  Shortbread = 'shortbread',
  Dessert = 'dessert',
}

export enum ProductTypeMap {
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

export const ProductCategoryTranslate: { [key in ProductCategoryMap]: string } =
  {
    [ProductCategoryMap.Bisque]: 'Бисквит',
    [ProductCategoryMap.Cheesecake]: 'Чизкейк',
    [ProductCategoryMap.Shortbread]: 'Песочное',
    [ProductCategoryMap.Dessert]: 'Десерт',
  };

export const ProductTypeTranslate: { [key in ProductTypeMap]: string } = {
  [ProductTypeMap.Chocolate]: 'Шоколадный',
  [ProductTypeMap.Vanilla]: 'Ваниль',
  [ProductTypeMap.Vegetarian]: 'Вегетарианский',
  [ProductTypeMap.HoneyCake]: 'Медовый',
  [ProductTypeMap.Lemon]: 'Лимонный',
  [ProductTypeMap.NewYork]: 'Нью-Йорк',
  [ProductTypeMap.Tart]: 'Тарт',
  [ProductTypeMap.FunnelCake]: 'Торт',
  [ProductTypeMap.BasketCake]: 'Корзинка',
  [ProductTypeMap.ChocolateMuffin]: 'Шоколадный кекс',
  [ProductTypeMap.BrandMuffin]: 'Фирменный кекс',
};
