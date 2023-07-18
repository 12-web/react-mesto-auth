import { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

const Main = ({ children }) => {
  return <main className='content'>{children}</main>;
};

Main.propTypes = {
  onEditAvatar: PropTypes.func,
  onEditProfile: PropTypes.func,
  onAddPlace: PropTypes.func,
  onCardClick: PropTypes.func,
  onCardLike: PropTypes.func,
  onCardDelete: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Main;
