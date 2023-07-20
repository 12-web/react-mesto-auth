import { useState } from 'react';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент защищенного роута
 * @component
 * @param { Object } props
 * @param { boolean } props.isFormLoading - состояние загрузки ответа с сервера
 * @param { function } props.onRegister - функция регистрации пользователя на сайте
 */
export const Register = ({ isFormLoading, onRegister }) => {
  const [userData, setUserData] = useState({});
  const emailId = 'email-signup';
  const passwordId = 'password-signup';
  const theme = 'dark';

  /** отправка формы при регистрации пользователя */
  const handleSubmit = e => {
    e.preventDefault();
    onRegister(userData);
  };

  /** сбор данных пользователя */
  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <section className={styles.register}>
      <Title theme={theme}>Регистрация</Title>
      <Form
        theme={theme}
        onSubmit={handleSubmit}
        name='signIn'
        submitText={isFormLoading ? 'Секундочку...' : 'Зарегистрироваться'}
      >
        <Input
          theme={theme}
          id={emailId}
          type='email'
          name='email'
          placeholder='Email'
          value={userData.name}
          onChange={handleChange}
          required
        />
        <span className={`popup__error ${emailId}-error`}></span>
        <Input
          theme={theme}
          iid={passwordId}
          type='password'
          name='password'
          placeholder='Пароль'
          value={userData.name}
          onChange={handleChange}
          autoComplete='nope'
          required
        />
        <span className={`popup__error ${passwordId}-error`}></span>
      </Form>
      <p className={styles.text}>
        Уже зарегистрированы?&nbsp;
        <Link className={styles.link} to='/signin'>
          Войти
        </Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  isFormLoading: PropTypes.bool,
  onRegister: PropTypes.func,
};
