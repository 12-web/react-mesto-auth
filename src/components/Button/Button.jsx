import styles from './Button.module.css';

export const Button = ({ theme, buttonText }) => {
  return (
    <button
      className={`${styles.button} ${theme && styles.dark} btn`}
      type='submit'
      aria-label={buttonText}
    >
      {buttonText}
    </button>
  );
};
