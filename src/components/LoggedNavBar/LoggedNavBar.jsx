import styles from './LoggedNavBar.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент меню для авторизованного пользователя
 * @component
 * @param { Object } props
 * @param { boolean } props.isMobileNavOpen - состояние, при котором открыто мобильное меню
 * @param { string } props.email - email аторизованного пользователя
 * @param { function } props.onSignOut - фукнция выхода из личного кабинета
 */
export const LoggedNavBar = ({ isMobileNavOpen, email, onSignOut }) => {
  return (
    <nav className={`${styles.nav} ${isMobileNavOpen && styles.opened}`}>
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
  );
};

LoggedNavBar.propTypes = {
  isNavOpen: PropTypes.bool,
  email: PropTypes.string,
  onSignOut: PropTypes.func,
};
