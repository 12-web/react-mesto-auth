import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PropTypes from 'prop-types';

const ConfirmDeleteCard = ({
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
      onConfirmDelete={onConfirmDelete}
      title='Вы уверены?'
      name='delete-confirm'
      buttonText={isFormLoading ? 'Удаление...' : 'Да'}
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

export default ConfirmDeleteCard;
