import cn from 'classnames';
import { TProducts } from '../../../types/products';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getAuthStatus } from '../../../store/user-data/user-data.selectors';
import { addToFavorite, deleteFavorite } from '../../../store/api-actions';
import { getFavorites } from '../../../store/favorites-data/favorites-data.selectors';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { useNavigate } from 'react-router-dom';

type FavoritesButtonProps = {
  id: TProducts['id'];
};

function FavoritesButton({ id }: FavoritesButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);
  const isFavorite = useAppSelector(getFavorites).some(
    (item) => item.id === id
  );

  const handleFavoriteClick = () => {
    if (authStatus === AuthorizationStatus.Auth) {
      if (isFavorite) {
        dispatch(deleteFavorite(id));
      } else {
        dispatch(addToFavorite(id));
      }
    }
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
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
