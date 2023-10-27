import React, { useState } from 'react';
import { AppRoute, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSendingStatus } from '../../store/user-data/user-data.selectors';
import { TAuthData } from '../../types/auth-data';
import { login } from '../../store/api-actions';
import { Link } from 'react-router-dom';

const EMAIL_INVALID_MESSAGE = 'Please enter a valid email address';
const PASSWORD_INVALID_MESSAGE =
  'We cant  recognize this email and password combination. Please try again.';

const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/;

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginSendingStatus = useAppSelector(getSendingStatus);

  const isUIBlocked = loginSendingStatus === RequestStatus.Pending;

  const [formData, setFormData] = useState<TAuthData>({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState({ email: true, password: true });
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailPattern.test(formData.email)) {
      setErrorMessage(EMAIL_INVALID_MESSAGE);
      setIsValid({ email: false, password: true });
    } else if (!passwordPattern.test(formData.password)) {
      setErrorMessage(PASSWORD_INVALID_MESSAGE);
      setIsValid({ email: true, password: false });
    } else {
      dispatch(login({ email: formData.email, password: formData.password }));
    }
  };

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
              <form
                action="#"
                method="post"
                autoComplete="off"
                onSubmit={handleFormSubmit}
              >
                <div className="login-page__fields">
                  <div className="custom-input login-page__field">
                    <label>
                      <span className="custom-input__label">
                        Введите вашу почту
                      </span>
                      <input
                        onChange={handleFormChange}
                        value={formData.email}
                        type="email"
                        name="email"
                        placeholder="Почта"
                        required
                        disabled={isUIBlocked}
                      />
                    </label>
                  </div>
                  <div className="custom-input login-page__field">
                    <label>
                      <span className="custom-input__label">
                        Введите ваш пароль
                      </span>
                      <input
                        onChange={handleFormChange}
                        value={formData.password}
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        required
                        disabled={isUIBlocked}
                      />
                    </label>
                  </div>
                </div>
                <button
                  className="btn login-page__btn btn--large"
                  type="submit"
                  disabled={isUIBlocked}
                >
                  {isUIBlocked ? 'Входим...' : 'Войти'}
                </button>
              </form>
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
