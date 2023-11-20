import { useEffect, useState } from 'react';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getLoginSendingStatus } from '../../store/user-data/user-data.selectors';
import { login } from '../../store/api-actions';
import { TAuthData } from '../../types/auth-data';
import cn from 'classnames';
import { toast } from 'react-toastify';
import { resetLoginSendingStatus } from '../../store/user-data/user-data.slice';

const EMAIL_INVALID_MESSAGE =
  'Пожалуйста введите валидный адрес электронной почты';
const PASSWORD_INVALID_MESSAGE = 'Пароль должен содержать одну букву и цифру';

const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/;

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginSendingStatus = useAppSelector(getLoginSendingStatus);

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

  useEffect(() => {
    if (loginSendingStatus === RequestStatus.Success) {
      setFormData({
        email: '',
        password: '',
      });
    }
    if (loginSendingStatus === RequestStatus.Rejected) {
      toast.error('Произошла ошибка при попытке входа, попробуйте еще раз');
    }
    dispatch(resetLoginSendingStatus());
  }, [loginSendingStatus, dispatch]);

  return (
    <form
      action="#"
      method="post"
      autoComplete="off"
      onSubmit={handleFormSubmit}
      noValidate
    >
      <div className="login-page__fields">
        <div className="custom-input login-page__field">
          <label>
            <span
              className={cn(
                { 'custom-input__label': isValid.email },
                {
                  'custom-input__message': !isValid.email,
                }
              )}
            >
              {isValid.email ? 'Введите вашу почту' : errorMessage}
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
            <span
              className={cn(
                { 'custom-input__label': isValid.password },
                {
                  'custom-input__message': !isValid.password,
                }
              )}
            >
              {isValid.password ? 'Введите пароль' : errorMessage}
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
  );
}

export default LoginForm;
