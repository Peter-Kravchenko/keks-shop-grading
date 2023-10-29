import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';

function NotFoundPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">404</h1>
        <section className="error-page">
          <div className="container">
            <h2 className="error-page__title">404</h2>
            <p className="error-page__message">Страница не найдена</p>
            <p className="error-page__text">
              Она была удалена
              <br />
              или
              <br />
              вы&nbsp;указали неправильный адрес.
            </p>
            <div className="error-page__button">
              <Link to={AppRoute.Main} className="btn btn--large">
                Вернуться&nbsp;на&nbsp;главную
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;
