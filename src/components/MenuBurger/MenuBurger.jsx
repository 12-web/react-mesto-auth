import { useState } from 'react';
import styles from './MenuBurger.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент меню-бургера
 * @component
 * @param {{ onClick: function }} onClick - функция нажатия на бургер
 */
export const MenuBurger = ({ onClick }) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const handleClick = () => {
    setBurgerIsOpen(!burgerIsOpen);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${burgerIsOpen && styles.opened}`}
      type='button'
      aria-label='Открыть меню'
    ></button>
  );
};

MenuBurger.propTypes = {
  onClick: PropTypes.func,
};
