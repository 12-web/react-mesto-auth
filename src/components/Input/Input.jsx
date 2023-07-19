import styles from './Input.module.css';

export const Input = ({ theme, onChange, ...props }) => {
  return (
    <input
      onChange={onChange}
      className={`${styles.input} ${styles[theme]}`}
      {...props}
    />
  );
};
