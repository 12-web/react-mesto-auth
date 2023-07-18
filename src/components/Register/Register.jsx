import { useState } from 'react';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

export const Register = ({ isFormLoading, onRegister }) => {
  const [userData, setUserData] = useState({});
  const emailId = 'email-signin';
  const theme = 'dark';
  const handleSubmit = e => {
    e.preventDefault();
    onRegister(userData);
  };
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
        buttonText={isFormLoading ? 'Секундочку...' : 'Зарегистрироваться'}
      >
        <Input
          theme={theme}
          id={emailId}
          type='email'
          name='email'
          placeholder='Email'
          minLength={2}
          maxLength={40}
          value={userData.name}
          onChange={handleChange}
          required
        />
        <span className={`popup__error ${emailId}-error`}></span>
        <Input
          theme={theme}
          iid={emailId}
          type='password'
          name='password'
          placeholder='Пароль'
          minLength={2}
          maxLength={40}
          value={userData.name}
          onChange={handleChange}
          required
        />
        <span className={`popup__error ${emailId}-error`}></span>
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