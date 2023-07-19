import styles from './Button.module.css';

export const Button = ({ theme, buttonText }) => {
  return (
    <button
      className={`btn ${styles.button} ${theme && styles[theme]}`}
      type='submit'
      aria-label={buttonText}
    >
      {buttonText}
    </button>
  );
};
