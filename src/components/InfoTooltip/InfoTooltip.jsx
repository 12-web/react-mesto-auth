import { Popup } from '../Popup/Popup';
import succesImage from '../../images/success-image.svg';
import unSuccesImage from '../../images/unsuccess-image.svg';
import styles from './InfoTooltip.module.css';

export const InfoTooltip = ({ isSuccessResult, ...props }) => {
  return (
    <Popup {...props}>
      <img
        className={styles.image}
        src={isSuccessResult ? succesImage : unSuccesImage}
        alt={isSuccessResult ? 'Успех' : 'Неудача'}
      />
      <p className={styles.text}>
        {isSuccessResult
          ? 'Вы успешно зарегистрировались!'
          : 'Что-то пошло не так! Попробуйте ещё раз.'}
      </p>
    </Popup>
  );
};
