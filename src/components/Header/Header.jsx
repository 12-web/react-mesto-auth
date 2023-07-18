import headerLogo from '../../images/logo-light.svg';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

const Header = ({ onSignOut, email }) => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <img src={headerLogo} alt='Логотип Местро' className={styles.logo} />
      <NavBar
        onSignOut={onSignOut}
        email={email}
        pathname={location.pathname}
      />
    </header>
  );
};

export default Header;
