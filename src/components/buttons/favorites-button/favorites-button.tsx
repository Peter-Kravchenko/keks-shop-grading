import cn from 'classnames';
import { TProducts } from '../../../types/products';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAuthStatus } from '../../../store/user-data/user-data.selectors';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { addToFavorite, deleteFavorite } from '../../../store/api-actions';
import { getFavorites } from '../../../store/favorites-data/favorites-data.selectors';

type TFavoritesButtonProps = {
  id: TProducts['id'];
};

function FavoritesButton({ id }: TFavoritesButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthStatus);
  const isFavorite = useAppSelector(getFavorites).some(
    (item) => item.id === id
  );

  const handleFavoriteClick = () => {
    if (isAuth) {
      if (isFavorite) {
        dispatch(deleteFavorite(id));
      } else {
        dispatch(addToFavorite(id));
      }
    } else {
      navigate(AppRoute.Login); //поправить
    }
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={cn({
        'card-item__favorites': true,
        'card-item__favorites--active': isFavorite,
      })}
    >
      <span className="visually-hidden">Добавить в избранное</span>
      <svg width={51} height={41} aria-hidden="true">
        <use xlinkHref="#icon-like" />
      </svg>
    </button>
  );
}

export default FavoritesButton;
