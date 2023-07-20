import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import styles from './UnLoggedNavBar.module.css';

/**
 * Компонент блока навигации для незарегистрированного пользователя
 * @component
 */

export const UnLoggedNavBar = () => {
  const [link, setLink] = useState({ name: '', link: '' });
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/signup'
      ? setLink({ name: 'Вход', link: '/signin' })
      : setLink({ name: 'Регистрация', link: '/signup' });
  }, [location]);

  return (
    <NavBar>
      <Link to={link.link} className={styles.link}>
        {link.name}
      </Link>
    </NavBar>
  );
};
