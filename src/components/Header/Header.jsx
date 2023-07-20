import headerLogo from '../../images/logo-light.svg';
import styles from './Header.module.css';
import { LoggedNavBar } from '../LoggedNavBar/LoggedNavBar';
import { UnLoggedNavBar } from '../UnLoggedNavBar/UnLoggedNavBar';
import { useState } from 'react';
import { MenuBurger } from '../MenuBurger/MenuBurger';
import PropTypes from 'prop-types';

/**
 * Компонент хедера (шапки)
 * @component
 * @param { Object } props
 * @param { boolean } props.loggedIn - состояние авторизации пользователя
 * @param { function } props.onSignOut - функция выхода пользоваля из личного кабинета
 * @param { string } props.email - email пользователя
 */
export const Header = ({ loggedIn, onSignOut, email }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  /** функция нажатия на кнопку-бургер */
  const handleClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  /** функция выхода пользователя из личного кабинета */
  const handleSignOut = () => {
    onSignOut();
    setIsMobileNavOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        isMobileNavOpen && styles.typeMobileOpened
      }`}
    >
      <img src={headerLogo} alt='Логотип Место' className={styles.logo} />
      {loggedIn ? (
        <>
          <MenuBurger onClick={handleClick} />
          <LoggedNavBar
            isMobileNavOpen={isMobileNavOpen}
            onSignOut={handleSignOut}
            email={email}
          />
        </>
      ) : (
        <UnLoggedNavBar />
      )}
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.bool,
  onSignOut: PropTypes.func,
  email: PropTypes.string,
};
