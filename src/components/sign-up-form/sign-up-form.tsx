import { useState } from 'react';
import { RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSendingStatus } from '../../store/user-data/user-data.selectors';
import { TSignUpData } from '../../types/sign-in-data';
import { signUp } from '../../store/api-actions';

function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const signUpSendingStatus = useAppSelector(getSendingStatus);

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
      <button className="btn register-page__btn btn--large" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
