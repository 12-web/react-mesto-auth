import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Компонент защищенного роута
 * @component
 * @param { Object } props
 * @param { JSX.Element } props.element - передаваемый компонент
 * @param { boolean } props.loggedIn - состояние авторизации пользователя (авторизован или нет)
 * @param { Array } props.props - дополнительные пропрсы, передаваемые в компонент
 */
export const ProtectedRoute = ({ element: Component, loggedIn, ...props }) => {
  return loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to='/signin' replace />
  );
};

ProtectedRoute.propTypes = {
  Component: PropTypes.node,
  loggedIn: PropTypes.bool,
  props: PropTypes.array,
};
