import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import PropTypes from 'prop-types';

/**
 * Компонент попапа подтверждения удаления карточки
 * @component
 * @param { Object } props
 * @param { boolean } props.isOpen - состояние открытия попапа
 * @param { function } props.onClose - функция закрытия попапа
 * @param { function } props.onConfirmDelete - функция подтверждения удаления карточки
 * @param { string } props.cardId - id удаляемой карточки
 * @param { boolean } props.isFormLoading - состояние загрузки ответа с сервера
 */
export const ConfirmDeleteCard = ({
  isOpen,
  onClose,
  onConfirmDelete,
  cardId,
  isFormLoading,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    onConfirmDelete(cardId);
  };
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      title='Вы уверены?'
      name='delete-confirm'
      submitText={isFormLoading ? 'Удаление...' : 'Да'}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
};

ConfirmDeleteCard.propTypes = {
  cardId: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirmDelete: PropTypes.func,
  isFormLoading: PropTypes.bool,
};
