import styles from './Form.module.css';
import { Submit } from '../Submit/Submit';
import PropTypes from 'prop-types';

/**
 * Компонент формы
 * @component
 * @param { Object } props
 * @param { boolean } props.theme - тема, которая определяет цвет кноки (например, dark)
 * @param { function } props.onSubmit - функция отправки формы
 * @param { string } props.name - имя формы
 * @param { JSX.Element } props.children - элементы формы
 * @param { string } props.submitText - текст кнопки
 */
export const Form = ({ theme, onSubmit, name, children, submitText }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
      id={name}
      action='#'
      name={name}
    >
      {children}
      <Submit theme={theme} submitText={submitText} />
    </form>
  );
};

Form.propTypes = {
  theme: PropTypes.string,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node,
  submitText: PropTypes.string,
};
