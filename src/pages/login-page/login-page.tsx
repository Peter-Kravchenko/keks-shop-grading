import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  return (
    <main>
      <section className="login-page">
        <div className="login-page__header">
          <div className="login-page__img-wrap">
            <img
              className="login-page__img"
              src="img/svg/hero-keks.svg"
              width={727}
              height={569}
              alt="Картинка кота."
            />
          </div>
        </div>
        <div className="login-page__content">
          <div className="login-page__inner">
            <h1 className="login-page__title">Вход</h1>
            <div className="login-page__form">
              <LoginForm />
            </div>
            <p className="login-page__text-wrap">
              Ещё не зарегистрированы?{' '}
              <Link to={AppRoute.SignUp} className="login-page__link">
                Создайте
              </Link>{' '}
              аккаунт прямо сейчас.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
