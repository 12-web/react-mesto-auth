import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export const NavBar = ({ onSignOut, email, pathname }) => {
  const [link, setLink] = useState({ name: '', link: '' });

  useEffect(() => {
    switch (pathname) {
      case '/signup':
        setLink({ name: 'Вход', link: '/signin' });
        break;
      default:
        setLink({ name: 'Регистрация', link: '/signup' });
    }
  }, [pathname]);

  return (
    <nav className={styles.navbar}>
      {email ? (
        <>
          <p className={styles.email}>{email}</p>
          <button
            type='button'
            aria-label='Выйти'
            onClick={onSignOut}
            className={`${styles.link} ${styles.button}`}
          >
            Выйти
          </button>
        </>
      ) : (
        <Link to={link.link} className={styles.link}>
          {link.name}
        </Link>
      )}
    </nav>
  );
};
