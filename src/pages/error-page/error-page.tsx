function ErrorPage(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header">
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
            <div className="header__buttons">
              <div className="header__btn">
                <a
                  className="btn btn--third header__link header__link--reg"
                  href="register-page.html"
                >
                  Регистрация
                </a>
              </div>
              <div className="header__btn">
                <a className="btn" href="login-page.html">
                  Войти
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h1 className="visually-hidden">Ошибка загрузки страницы</h1>
        <section className="error-loading">
          <div className="container">
            <h2 className="error-loading__title">
              Что-то пошло не&nbsp;так...
            </h2>
            <p className="error-loading__help">
              Попробуйте перезагрузить страницу или обратитесь
              к&nbsp;администратору сайта.
            </p>
            <div className="error-loading__image">
              <img
                src="img/svg/cake-load.svg"
                width={157}
                height={184}
                alt="Кекс."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <p className="footer__feedback">
              Напишите нам:
              <a
                className="footer__feedback-email"
                href="mailto:pecarnya@academy.pro"
              >
                pecarnya@academy.pro
              </a>
            </p>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  className="footer__social-link"
                  href="#"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <span className="visually-hidden">Вконтакте</span>
                  <svg width={50} height={50} aria-hidden="true">
                    <use xlinkHref="#icon-vk" />
                  </svg>
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__social-link"
                  href="#"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <span className="visually-hidden">Телеграм</span>
                  <svg width={50} height={50} aria-hidden="true">
                    <use xlinkHref="#icon-telegram" />
                  </svg>
                </a>
              </li>
            </ul>
            <a className="footer__devolopers" href="https://htmlacademy.ru/">
              Разработано .html Academy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ErrorPage;
