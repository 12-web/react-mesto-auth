import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

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

export default Footer;
