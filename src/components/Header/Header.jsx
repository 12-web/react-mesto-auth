import headerLogo from '../../images/logo-light.svg';
import styles from './Header.module.css';
import { LoggedNavBar } from '../LoggedNavBar/LoggedNavBar';
import { UnLoggedNavBar } from '../UnLoggedNavBar/UnLoggedNavBar';
import { useState } from 'react';
import { MenuBurger } from '../MenuBurger/MenuBurger';

const Header = ({ loggedIn, onSignOut, email }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSignOut = () => {
    onSignOut();
    setIsNavOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${isNavOpen && styles.typeMobileOpened}`}
    >
      <img src={headerLogo} alt='Логотип Место' className={styles.logo} />
      {loggedIn ? (
        <>
          <MenuBurger onClick={handleClick} />
          <LoggedNavBar
            isNavOpen={isNavOpen}
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

export default Header;
