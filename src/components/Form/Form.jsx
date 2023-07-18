import styles from './Form.module.css';
import { Button } from '../Button/Button';
export const Form = ({ theme, onSubmit, name, children, buttonText }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
      id={name}
      action='#'
      name={name}
    >
      {children}
      <Button theme={theme} buttonText={buttonText} />
    </form>
  );
};
