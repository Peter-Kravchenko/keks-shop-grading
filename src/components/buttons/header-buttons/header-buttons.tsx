import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { checkAuth, logout } from '../../../store/api-actions';
import { getFavorites } from '../../../store/favorites-data/favorites-data.selectors';

type HeaderButtonsProps = {
  isAuth: boolean;
};

function HeaderButtons({ isAuth }: HeaderButtonsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const favouritesCount = useAppSelector(getFavorites).length;

  return (
    <div className="header__buttons">
      {isAuth ? (
        <>
          <Link to={AppRoute.Favorites} className="header__favourite">
            <span className="header__favourite-icon">
              <svg width={33} height={29} aria-hidden="true">
                <use xlinkHref="#icon-favourite" />
              </svg>
            </span>
            {favouritesCount > 0 && (
              <span className="header__favourite-number">
                {favouritesCount}
              </span>
            )}
            <span className="visually-hidden">Избранное</span>
          </Link>
          <div className="header__buttons-authorized">
            <div className="header__btn">
              <Link
                to={AppRoute.Main}
                className="btn btn--second"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(logout());
                  dispatch(checkAuth());
                }}
              >
                Выйти
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__btn">
            <Link
              to={AppRoute.SignUp}
              className="btn btn--third header__link header__link--reg"
            >
              Регистрация
            </Link>
          </div>
          <div className="header__btn">
            <Link to={AppRoute.Login} className="btn">
              Войти
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderButtons;
