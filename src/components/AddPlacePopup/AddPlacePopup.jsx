import { useEffect, useState } from 'react';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Input } from '../Input/Input';
import PropTypes from 'prop-types';

/**
 * Компонент формы добавления новой карточки
 * @component
 * @param { Object } props
 * @param { function } props.onClose - функция закрытия попапа
 * @param { boolean } props.isOpen - состояние открытия попапа
 * @param { function } props.onAddPlace - функция добавления новой карточки
 * @param { boolean } props.isFormLoading - состояние загрузки ответа с сервера
 */
export const AddPlacePopup = ({
  onClose,
  isOpen,
  onAddPlace,
  isFormLoading,
}) => {
  const [cardData, setCardData] = useState({ title: '', link: '' });
  const addNameId = 'add-name';
  const addLinkId = 'add-link';

  /** создание новой карточки */
  const handleSubmit = e => {
    e.preventDefault();
    onAddPlace(cardData);
  };

  /** получение данных из формы */
  const handleChange = e => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  /** обнуление данных формы при открытии модального окна */
  useEffect(() => {
    setCardData({ title: '', link: '' });
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title='Новое место'
      name='add'
      submitText={isFormLoading ? 'Секундочку...' : 'Создать'}
    >
      <Input
        value={cardData.title}
        onChange={handleChange}
        className='popup__input popup__input_value_name'
        id={addNameId}
        type='text'
        name='title'
        placeholder='Название'
        minLength={2}
        maxLength={30}
        required
      />
      <span className={`popup__error ${addNameId}-error`}></span>
      <Input
        value={cardData.link}
        onChange={handleChange}
        className='popup__input popup__input_value_link'
        id={addLinkId}
        type='url'
        name='link'
        placeholder='Ссылка на картинку'
        required
      />
      <span className={`popup__error ${addLinkId}-error`}></span>
    </PopupWithForm>
  );
};

AddPlacePopup.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  onAddPlace: PropTypes.func,
  isFormLoading: PropTypes.bool,
};
