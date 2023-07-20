import styles from './Title.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент заголовка
 * @component
 * @param { Object } props
 * @param { string } props.theme - тема, которая определяет стилизацию элемента (например, dark)
 * @param { string | string[] } props.children - текст заголовка
 */
export const Title = ({ children, theme }) => {
  return <h2 className={`${styles.title} ${styles[theme]}`}>{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  theme: PropTypes.string,
};
