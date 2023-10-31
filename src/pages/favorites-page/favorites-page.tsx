import BackButton from '../../components/buttons/back-button/back-button';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFavorites,
  getFavoriresFetchingStatus,
} from '../../store/favorites-data/favorites-data.selectors';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesSection from '../../components/favorites-section/favorites-section';
import Loader from '../../components/loader/loader';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/api-actions';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const favorites = useAppSelector(getFavorites);
  const favoritesFetchingStatus = useAppSelector(getFavoriresFetchingStatus);

  if (favoritesFetchingStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <div className="back-link">
            <div className="container">
              <BackButton />
            </div>
          </div>
          {favorites.length > 0 ? (
            <FavoritesSection favorites={favorites} />
          ) : (
            <FavoritesEmpty />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
