import PropTypes from 'prop-types';

/**
 * Компонент попапа просмотра карточки
 * @component
 * @param { Object } props
 * @param { Object } props.card - объект, содержащий данные карточки (название, ссылка, количество лайков)
 * @param { string } props.card.name - название карточки
 * @param { string } props.card.link - ссылка на картинку в карточке
 * @param { function } props.onClose - функция закрытия попапа
 */
export const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup ${card.link && 'popup_opened'} popup_type_show`}>
      <div className='popup__show-content'>
        <button
          className='popup__close-btn btn'
          type='button'
          title='Закрыть окно'
          onClick={onClose}
        />
        <figure className='popup__img-container'>
          <img className='popup__img' src={card.link} alt={card.name} />
          <figcaption className='popup__caption'>{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
};

ImagePopup.propTypes = {
  card: PropTypes.objectOf(PropTypes.string),
  onClose: PropTypes.func,
};
