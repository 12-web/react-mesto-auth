import styles from './MainLoader.module.css';

/**
 * Компонент лоадера загрузки основного контента
 * @component
 */
export const MainLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};
