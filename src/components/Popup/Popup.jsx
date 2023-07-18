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
