import styles from './LoggedNavBar.module.css';
import { MenuBurger } from '../MenuBurger/MenuBurger';
import { useState } from 'react';

export const LoggedNavBar = ({ isNavOpen, email, onSignOut }) => {
  return (
    <>
      <nav className={`${styles.nav} ${isNavOpen && styles.opened}`}>
        <p className={styles.email}>{email}</p>
        <button
          type='button'
          aria-label='Выйти'
          onClick={onSignOut}
          className={`${styles.link} ${styles.button}`}
        >
          Выйти
        </button>
      </nav>
    </>
  );
};
