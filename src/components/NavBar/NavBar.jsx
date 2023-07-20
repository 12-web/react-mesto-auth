import styles from './NavBar.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент блока навигации
 * @component
 * @param {{ children: JSX.Element }} children - содержимое блока навигации
 */
export const NavBar = ({ children }) => {
  return <nav className={styles.navbar}>{children}</nav>;
};

NavBar.propTypes = {
  children: PropTypes.node,
};
