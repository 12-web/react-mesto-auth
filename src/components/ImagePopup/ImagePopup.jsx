import PropTypes from 'prop-types';

const ImagePopup = ({ card, onClose }) => {
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
  card: PropTypes.object,
  onClose: PropTypes.func,
};

export default ImagePopup;
