import styles from './UnLoggedNavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavBar } from '../NavBar/NavBar';

export const UnLoggedNavBar = () => {
  const [link, setLink] = useState({ name: '', link: '' });
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/signup':
        setLink({ name: 'Вход', link: '/signin' });
        break;
      default:
        setLink({ name: 'Регистрация', link: '/signup' });
    }
  }, [location]);

  return (
    <NavBar pathname={location.pathname}>
      <Link to={link.link} className={styles.link}>
        {link.name}
      </Link>
    </NavBar>
  );
};
