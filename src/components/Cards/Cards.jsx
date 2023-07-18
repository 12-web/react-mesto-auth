import Card from '../Card/Card';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export const Cards = ({
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
              title='Редактировать профиль'
              type='button'
              onClick={onEditProfile}
            />
          </div>
        </div>
        <button
          className='profile__add-btn btn'
          id='add-card-btn'
          title='Добавить карточку'
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
