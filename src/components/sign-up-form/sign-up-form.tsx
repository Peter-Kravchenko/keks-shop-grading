import { useEffect, useState } from 'react';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSignUpSendingStatus } from '../../store/user-data/user-data.selectors';
import { TSignUpData } from '../../types/sign-in-data';
import { signUp } from '../../store/api-actions';
import { toast } from 'react-toastify';
import cn from 'classnames';
import { resetSignUpSendingStatus } from '../../store/user-data/user-data.slice';

const namePattern = /^.{1,20}$/;
const emailPattern =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.{1,}$)/;

const NAME_INVALID_MESSAGE = 'Поле должно включать минимум один символ';
const EMAIL_INVALID_MESSAGE = 'Введите валидный адрес электронной почты';
const PASSWORD_INVALID_MESSAGE =
  'Пароль должен быть без пробелов и содержать хотя бы одну букву и одну цифру.';

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const signUpSendingStatus = useAppSelector(getSignUpSendingStatus);

  const isUIBlocked = signUpSendingStatus === RequestStatus.Pending;

  const [formData, setFormData] = useState<TSignUpData>({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
    avatar: true,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!namePattern.test(formData.name)) {
      setErrorMessage(NAME_INVALID_MESSAGE);
      setIsValid({ name: false, email: true, password: true, avatar: true });
    } else if (!emailPattern.test(formData.email)) {
      setErrorMessage(EMAIL_INVALID_MESSAGE);
      setIsValid({ name: true, email: false, password: true, avatar: true });
    } else if (!passwordPattern.test(formData.password)) {
      setErrorMessage(PASSWORD_INVALID_MESSAGE);
      setIsValid({ name: true, email: true, password: false, avatar: true });
    } else {
      const form = e.currentTarget;
      const formValue = new FormData(form);
      const data = Object.fromEntries(formValue) as TSignUpData;
      const currentData = { ...formData, avatar: data.avatar } as TSignUpData;
      dispatch(signUp(currentData));
    }
  };

  useEffect(() => {
    if (signUpSendingStatus === RequestStatus.Success) {
      setFormData({
        name: '',
        email: '',
        password: '',
        avatar: '',
      });
    }
    if (signUpSendingStatus === RequestStatus.Rejected) {
      toast.error('Произошла ошибка при регистрации, попробуйте еще раз');
    }
    dispatch(resetSignUpSendingStatus());
  }, [signUpSendingStatus, dispatch]);

  return (
    <form
      onSubmit={handleFormSubmit}
      action="#"
      method="post"
      autoComplete="off"
      noValidate
    >
      <div className="register-page__fields">
        <div className="custom-input register-page__field">
          <label>
            <span
              className={cn(
                { 'custom-input__label': isValid.name },
                {
                  'custom-input__message': !isValid.name,
                }
              )}
            >
              {isValid.name ? 'Введите ваше имя' : errorMessage}
            </span>
            <input
              onChange={handleFormChange}
              value={formData.name}
              type="name"
              name="name"
              placeholder="Имя"
              required
              disabled={isUIBlocked}
            />
          </label>
        </div>
        <div className="custom-input register-page__field">
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
        <div className="custom-input register-page__field">
          <label>
            <span
              className={cn(
                { 'custom-input__label': isValid.password },
                {
                  'custom-input__message': !isValid.password,
                }
              )}
            >
              {isValid.password ? 'Введите вашу почту' : errorMessage}
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
        <div
          className={cn('custom-input register-page__field', {
            'file-selected': formData.avatar,
          })}
        >
          <label>
            <span className="custom-input__label">Введите ваше имя</span>
            <input
              onChange={handleFormChange}
              type="file"
              name="avatar"
              data-text="Аватар"
              accept="image/jpeg image/png"
            />
          </label>
        </div>
      </div>
      <button
        className="btn register-page__btn btn--large"
        type="submit"
        disabled={
          isUIBlocked || !isValid.name || !isValid.email || !isValid.password
        }
      >
        {isUIBlocked ? 'Загрузка...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}

export default SignUpForm;
