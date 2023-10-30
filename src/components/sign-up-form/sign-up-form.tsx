import { useState } from 'react';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUserSendingStatus } from '../../store/user-data/user-data.selectors';
import { TSignUpData } from '../../types/sign-in-data';
import { signUp } from '../../store/api-actions';
import { toast } from 'react-toastify';

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const signUpSendingStatus = useAppSelector(getUserSendingStatus);

  const isUIBlocked = signUpSendingStatus === RequestStatus.Pending;

  const [formData, setFormData] = useState<TSignUpData>({
    name: '',
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );
    toast.success('Вы успешно зарегистрировались!');
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      action="#"
      method="post"
      autoComplete="off"
    >
      <div className="register-page__fields">
        <div className="custom-input register-page__field">
          <label>
            <span className="custom-input__label">Введите ваше имя</span>
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
            <span className="custom-input__label">Введите вашу почту</span>
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
            <span className="custom-input__label">Введите ваш пароль</span>
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
        <div className="custom-input register-page__field">
          <label>
            <span className="custom-input__label">Введите ваше имя</span>
            <input
              type="file"
              name="user-name-1"
              data-text="Аватар"
              accept="image/jpeg"
            />
          </label>
        </div>
      </div>
      <button
        className="btn register-page__btn btn--large"
        type="submit"
        disabled={isUIBlocked}
      >
        {isUIBlocked ? 'Загрузка...' : 'Зарегистрироваться'}
      </button>
    </form>
  );
}

export default SignUpForm;
