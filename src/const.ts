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
