import { Link } from 'react-router-dom';
import { TProduct } from '../../types/product';
import { AppRoute } from '../../const';
import CatalogCardsList from '../catalog-cards-list/catalog-cards-list';
import { useAppDispatch } from '../../hooks';
import { deleteFavorite } from '../../store/api-actions';
import { addPluralEnding } from '../../utils/utils';

type TFavoritesSectionProps = {
  favorites: TProduct[];
};

function FavoritesSection({ favorites }: TFavoritesSectionProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="number-of-favourites favorites-page__qty">
        <div className="container">
          <h2 className="visually-hidden">Количество товаров в избранном.</h2>
          <p className="number-of-favourites__cakes">
            {favorites.length} кекс{addPluralEnding(favorites.length)}
          </p>
          <div className="number-of-favourites__wrapper">
            <div className="number-of-favourites__wrap-price">
              <p className="number-of-favourites__text">Всего</p>
              <p className="number-of-favourites__price">
                {favorites.reduce((sum, product) => sum + product.price, 0)} р
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
            <button
              className="btn btn--second"
              type="button"
              onClick={() =>
                favorites.forEach((favorite) => {
                  dispatch(deleteFavorite(favorite.id));
                })
              }
            >
              Очистить
            </button>
          </div>
        </div>
        <CatalogCardsList products={favorites} />
      </section>
    </>
  );
}

export default FavoritesSection;
