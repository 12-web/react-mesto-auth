import { Card } from '../Card/Card';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PropTypes from 'prop-types';

/**
 * Компонент страницы с карточками и данными пользователя
 * @component
 * @param { Object } props
 * @param { function } props.onEditProfile - функция изменения данных пользователя
 * @param { function } props.onAddPlace - функция добавления новой карточки
 * @param { function } props.onEditAvatar - функция изменения аватара пользователя
 * @param { function } props.onCardClick - функция нажатия на карточки с открытие попапа просмотра картинки
 * @param { function } props.onCardLike - функция лайка карточки
 * @param { function } props.onCardDelete - функция удаления карточки
 * @param { Array } props.cards - массив с карточками, полученными с сервара
 */
export const Profile = ({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) => {
  const { name, about, avatar } = useContext(CurrentUserContext);

  return (
    <>
      <section className='profile'>
        <div className='profile__info'>
          <div
            className='profile__img-container profile__edit-avatar'
            onClick={onEditAvatar}
          >
            <img
              src={avatar}
              alt='Фото пользователя'
              className='profile__img'
            />
          </div>
          <div className='profile__user-info'>
            <h1 className='profile__name'>{name}</h1>
            <p className='profile__profession'>{about}</p>
            <button
              className='profile__edit-btn btn'
              id='edit-profile-btn'
              aria-label='Редактировать профиль'
              type='button'
              onClick={onEditProfile}
            />
          </div>
        </div>
        <button
          className='profile__add-btn btn'
          id='add-card-btn'
          aria-label='Добавить карточку'
          type='button'
          onClick={onAddPlace}
        />
      </section>
      <section className='journey'>
        <ul className='journey__list'>
          {cards.map(cardData => (
            <Card
              key={cardData._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              card={cardData}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

Profile.propTypes = {
  onEditProfile: PropTypes.func,
  onAddPlace: PropTypes.func,
  onEditAvatar: PropTypes.func,
  onCardClick: PropTypes.func,
  onCardLike: PropTypes.func,
  onCardDelete: PropTypes.func,
  cards: PropTypes.array,
};
