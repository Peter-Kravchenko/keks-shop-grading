import { Link } from 'react-router-dom';
import BackButton from '../../components/buttons/back-button/back-button';
import CatalogCardsList from '../../components/catalog-cards-list/catalog-cards-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFavorites } from '../../store/favorites-data/favorites-data.selectors';

function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <div className="back-link">
            <div className="container">
              <BackButton rote={AppRoute.Main} />
            </div>
          </div>
          <section className="number-of-favourites favorites-page__qty">
            <div className="container">
              <h2 className="visually-hidden">
                Количество товаров в избранном.
              </h2>
              <p className="number-of-favourites__cakes">2 кекса</p>
              <div className="number-of-favourites__wrapper">
                <div className="number-of-favourites__wrap-price">
                  <p className="number-of-favourites__text">Всего</p>
                  <p className="number-of-favourites__price">
                    13&nbsp;400&nbsp;р
                  </p>
                </div>
              </div>
              <div className="number-of-favourites__button">
                <Link to={AppRoute.Catalog} className="btn">
                  В каталог
                </Link>
              </div>
            </div>
          </section>
          <section className="favourites">
            <div className="container">
              <h2 className="visually-hidden">Избранные товары</h2>
              <div className="favourites__button">
                <button className="btn btn--second" type="button">
                  Очистить
                </button>
              </div>
            </div>
            {favorites.length > 0 ? (
              <CatalogCardsList products={favorites} />
            ) : (
              <h1>пусто</h1>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
