import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

function SignUpPage(): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img
                className="register-page__img"
                src="img/svg/hero-keks.svg"
                width={727}
                height={569}
                alt="Картинка кота."
              />
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <div className="register-page__form">
                <SignUpForm />
              </div>
              <p className="register-page__text-wrap">
                Уже зарегистрированы?{' '}
                <Link to={AppRoute.Login} className="register-page__link">
                  Войдите
                </Link>{' '}
                в свой аккаунт.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignUpPage;
