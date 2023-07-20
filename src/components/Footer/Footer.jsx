import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

/**
 * Компонент футера (подвала) сайта
 * @component
 */

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  /** добавление на страницу текущего года */
  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setCurrentYear(currentYear);
  }, []);

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© {currentYear} Mesto Russia</p>
    </footer>
  );
};
