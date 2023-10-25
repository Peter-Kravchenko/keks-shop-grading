function Header(): JSX.Element {
  return (
    <header className="header header--authorized __web-inspector-hide-shortcut__">
      <div className="container">
        <div className="header__inner">
          <a
            className="header__logo"
            href="index.html"
            aria-label="Переход на главную"
          >
            <img
              src="img/svg/logo.svg"
              width={170}
              height={69}
              alt="Кондитерская кекс"
            />
          </a>
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x"
                  />
                  <img
                    src="img/content/user-avatar.jpg"
                    srcSet="img/content/user-avatar@2x.jpg 2x"
                    width={62}
                    height={62}
                    alt="Аватар пользователя."
                  />
                </picture>
              </div>
              <p className="header__user-mail">keks@academy.ru</p>
            </div>
          </div>
          <div className="header__buttons">
            <a className="header__favourite" href="#">
              <span className="header__favourite-icon">
                <svg width={33} height={29} aria-hidden="true">
                  <use xlinkHref="#icon-favourite" />
                </svg>
              </span>
              <span className="visually-hidden">Избранное</span>
            </a>
            <div className="header__buttons-authorized">
              <div className="header__btn">
                <a className="btn btn--second" href="#">
                  Выйти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
