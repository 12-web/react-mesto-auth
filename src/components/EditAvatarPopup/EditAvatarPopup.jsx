import { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/**
 * Компонент попапа изменения аватара пользователя
 * @component
 * @param { Object } props
 * @param { boolean } props.isOpen - состояние открытия попапа
 * @param { function } props.onClose - функция закрытия попапа
 * @param { function } props.onUpdateAvatar - функция изменения аватара пользователя
 * @param { boolean } props.isFormLoading - состояние загрузки ответа с сервера
 */

export const EditAvatarPopup = ({
  isOpen,
  onClose,
  onUpdateAvatar,
  isFormLoading,
}) => {
  const avatar = useRef();
  const userAvatar = useContext(CurrentUserContext);
  const avatarId = 'avatar-link';

  /** изменение аватара пользователя */
  const handleSubmit = e => {
    e.preventDefault();
    onUpdateAvatar(avatar.current.value);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Обновить аватар'
      name='avatar'
      submitText={isFormLoading ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        ref={avatar}
        defaultValue={userAvatar.avatar}
        className='popup__input popup__input_value_avatar'
        id={avatarId}
        type='url'
        name='avatar'
        placeholder='Ссылка на изображение'
        required
      />
      <span className={`popup__error ${avatarId}-error`}></span>
    </PopupWithForm>
  );
};

EditAvatarPopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onUpdateAvatar: PropTypes.func,
  isFormLoading: PropTypes.bool,
};
