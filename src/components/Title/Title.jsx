import styles from './Title.module.css';

export const Title = ({ children, theme }) => {
  return (
    <h2 className={`${styles.title} ${theme && styles.dark}`}>{children}</h2>
  );
};
