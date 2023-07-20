import styles from './Submit.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент кнопки отправки формы
 * @component
 * @param { Object } props
 * @param { string } props.theme - тема, меняющая стилизацию кнопки (например, dark)
 * @param { string } props.submitText - текст кнопки
 */
export const Submit = ({ theme, submitText }) => {
  return (
    <button
      className={`${styles.submit} ${styles[theme]}`}
      type='submit'
      aria-label={submitText}
    >
      {submitText}
    </button>
  );
};

Submit.propTypes = {
  theme: PropTypes.string,
  buttonText: PropTypes.string,
};

Submit.defaultProps = {
  submitText: 'Отправить',
};
