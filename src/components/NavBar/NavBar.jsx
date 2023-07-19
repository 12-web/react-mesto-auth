import styles from './NavBar.module.css';

export const NavBar = ({ children }) => {
  return <nav className={styles.navbar}>{children}</nav>;
};
