import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import {
  getAuthStatus,
  getUser,
} from '../../store/user-data/user-data.selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import HeaderButtons from '../buttons/header-buttons/header-buttons';

function Header(): JSX.Element {
  const isAuth = useAppSelector(getAuthStatus) === AuthorizationStatus.Auth;

  const user = useAppSelector(getUser);

  return (
    <header className={cn({ header: true, 'header--authorized': isAuth })}>
      <div className="container">
        <div className="header__inner">
          <Link
            to={AppRoute.Main}
            className="header__logo"
            aria-label="Переход на главную"
          >
            <img
              src='/img/svg/logo.svg'
              width={170}
              height={69}
              alt="Кондитерская кекс"
            />
          </Link>
          {isAuth && (
            <div className="header__user-info-wrap">
              <div className="header__user-info">
                <div className="header__user-avatar">
                  <picture>
                    <source type="image/webp" src={user?.avatarUrl} />
                    <img
                      src={user?.avatarUrl}
                      width={62}
                      height={62}
                      alt="Аватар пользователя."
                    />
                  </picture>
                </div>
                <p className="header__user-mail">{user?.email}</p>
              </div>
            </div>
          )}
          <HeaderButtons isAuth={isAuth} />
        </div>
      </div>
    </header>
  );
}

export default Header;
