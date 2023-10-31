import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ProductPage from '../../pages/product-page/product-page';
import MainPage from '../../pages/main-page/main-page';
import ProtectedRoute from '../protected-route/protected-route';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import LoginPage from '../../pages/login-page/login-page';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import {
  checkAuth,
  fetchCategories,
  fetchFavorites,
  fetchLastReview,
  fetchProducts,
} from '../../store/api-actions';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import { getAuthStatus } from '../../store/user-data/user-data.selectors';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchLastReview());
    dispatch(fetchFavorites());
  }, [dispatch]);

  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
          <Route path={`${AppRoute.Product}/:id`} element={<ProductPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectTo={AppRoute.Login}
              >
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.SignUp}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Login}
              >
                <SignUpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Main}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
