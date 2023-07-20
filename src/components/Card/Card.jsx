import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

/**
 * Компонент карточки с картинкой, названием, кнопкой лайка и счетчиком лайков
 * @component
 * @param { Object } props
 * @param { function } props.onCardClick - функция нажатия на картинку с открытием попапа просмотра картинки
 * @param { function } props.onCardLike - функция лайка карточки
 * @param { function } props.onCardDelete - функция удаления карточки
 * @param { Object } props.card - объект, содержащий данные карточки (название, ссылка, количество лайков)
 * @param { string } props.card._id - id карточки
 * @param { string } props.card.link - ссылка на картинку карточки
 * @param { string } props.card.name - название карточки
 * @param { Array.<{_id: string}> } props.card.likes - массив пользователей, который лайкнули карточку
 * @param { {_id: string} } props.card.owner - пользователь, который создал карточку
 */
export const Card = ({ onCardClick, onCardLike, onCardDelete, card }) => {
  const { _id } = useContext(CurrentUserContext);
  const isLiked = card.likes.some(like => like._id === _id);
  const isOwner = card.owner._id === _id;

  /** функция нажатия на карточку с открытием попапа просмотра карточки */
  const handleCardClick = () => onCardClick(card);

  /** функция нажатия на кнопку лайка */
  const handleLikeClick = () => onCardLike(card);

  /** функция нажатия на кнопку удаления */
  const handleDeleteClick = () => onCardDelete(card._id);

  return (
    <li className='journey__item'>
      <button
        type='button'
        className='journey__img-btn btn'
        aria-label='Посмотреть фото'
        onClick={handleCardClick}
      >
        <img className='journey__img' src={card.link} alt={card.name} />
      </button>
      {isOwner && (
        <button
          onClick={handleDeleteClick}
          type='button'
          className='journey__delete-btn btn'
          title='Удалить'
        />
      )}
      <div className='journey__description'>
        <h2 className='journey__title'>{card.name}</h2>
        <div className='journey__like-container'>
          <button
            onClick={handleLikeClick}
            type='button'
            className={`journey__like-btn ${
              isLiked && 'journey__like-btn_active'
            } btn`}
            aria-label='Оценить'
          />
          <span className='journey__like-digit'>{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    owner: PropTypes.objectOf(PropTypes.string),
    likes: PropTypes.arrayOf(PropTypes.object),
  }),
  onCardClick: PropTypes.func,
  onCardLike: PropTypes.func,
  onCardDelete: PropTypes.func,
};

export default Card;
