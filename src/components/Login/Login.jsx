import { useState } from 'react';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';
import { Input } from '../Input/Input';
import styles from './Login.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент страницы авторизации пользователя
 * @component
 * @param { Object } props
 * @param { boolean } props.isFormLoading - состояние ожидания ответа от сервера при отправке формы
 * @param { function } props.onLogin - функция авторизации пользователя
 */
export const Login = ({ isFormLoading, onLogin }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const emailId = 'email-signin';
  const passwordId = 'password-signin';
  const theme = 'dark';

  /** отправка формы при авторизации пользователя */
  const handleSubmit = e => {
    e.preventDefault();
    onLogin(userData);
  };

  /** функция получения данных из формы */
  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <section className={styles.login}>
      <Title theme={theme}>Вход</Title>
      <Form
        theme={theme}
        onSubmit={handleSubmit}
        name='signIn'
        submitText={isFormLoading ? 'Секундочку...' : 'Войти'}
      >
        <Input
          theme={theme}
          id={emailId}
          type='email'
          name='email'
          placeholder='Email'
          value={userData.email}
          onChange={handleChange}
          required
        />
        <span className={`popup__error ${emailId}-error`}></span>
        <Input
          theme={theme}
          id={passwordId}
          type='password'
          name='password'
          placeholder='Пароль'
          value={userData.password}
          onChange={handleChange}
          autoComplete='nope'
          required
        />
        <span className={`popup__error ${passwordId}-error`}></span>
      </Form>
    </section>
  );
};

Login.propTypes = {
  isFormLoading: PropTypes.bool,
  onLogin: PropTypes.func,
};
