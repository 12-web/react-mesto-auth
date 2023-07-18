import styles from './Input.module.css';

export const Input = ({ theme, onChange, value, ...props }) => {
  return (
    <input
      onChange={onChange}
      className={`${styles.input} ${theme && styles.dark}`}
      {...props}
    />
  );
};
