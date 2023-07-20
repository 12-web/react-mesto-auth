import styles from './Input.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент инпута формы
 * @component
 * @param { Object } props
 * @param { string } props.theme - тема, определяющая стилизацию компонента (например, dark)
 * @param { function } props.onChange - функция изменения содержимого инпута
 * @param { Array } props.props - параметры, передаваемые в инпут (требования к заполнению, имя инпута и др)
 */
export const Input = ({ theme, onChange, ...props }) => {
  return (
    <input
      onChange={onChange}
      className={`${styles.input} ${styles[theme]}`}
      {...props}
    />
  );
};

Input.propTypes = {
  theme: PropTypes.string,
  onChange: PropTypes.func,
  props: PropTypes.array,
};
