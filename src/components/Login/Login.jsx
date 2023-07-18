import { useState } from 'react';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';
import { Input } from '../Input/Input';
import styles from './Login.module.css';

export const Login = ({ isFormLoading, onLogin }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const emailId = 'email-signin';
  const theme = 'dark';

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(userData);
  };
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
        buttonText={isFormLoading ? 'Секундочку...' : 'Войти'}
      >
        <Input
          theme={theme}
          id={emailId}
          type='email'
          name='email'
          placeholder='Email'
          minLength={2}
          maxLength={40}
          value={userData.email}
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
          value={userData.password}
          onChange={handleChange}
          required
        />
        <span className={`popup__error ${emailId}-error`}></span>
      </Form>
    </section>
  );
};
