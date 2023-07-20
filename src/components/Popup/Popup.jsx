import PropTypes from 'prop-types';

/**
 * Компонент попапа
 * @component
 * @param { Object } props
 * @param { boolean } props.isOpen - состояние открытия попапа
 * @param { string } props.name - имя для модификатора компонента попапа
 * @param { function } props.onClose - функция закрытия попапа
 * @param {{ children: JSX.Element }} props.children - содержимое попапа
 */
export const Popup = ({ isOpen, name, onClose, children }) => {
  return (
    <div className={`popup ${isOpen && 'popup_opened'} popup_type_${name}`}>
      <div className='popup__container'>
        <button
          className='popup__close-btn btn'
          aria-label='Закрыть окно'
          type='button'
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
