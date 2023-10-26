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
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchLastReview, fetchProducts } from '../../store/api-actions';
import CatalogPage from '../../pages/catalog-page/catalog-page';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchLastReview());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage />} />
          <Route path={AppRoute.Catalog} element={<CatalogPage />} />
          <Route path={`${AppRoute.Product}`} element={<ProductPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectTo={AppRoute.Main}
              >
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.SignUp}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth} //далее убрать заглушку
                redirectTo={AppRoute.Main}
              >
                <SignUpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute
                restrictedFor={AuthorizationStatus.Auth} //далее убрать заглушку
                redirectTo={AppRoute.Main}
              >
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
