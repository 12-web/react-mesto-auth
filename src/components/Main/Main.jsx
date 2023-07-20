import PropTypes from 'prop-types';

/**
 * Компонент контейнера основного контента страницы
 * @component
 * @param {{ children: JSX.Element }} children - содежимое страницы
 */
export const Main = ({ children }) => {
  return <main className='content'>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};
