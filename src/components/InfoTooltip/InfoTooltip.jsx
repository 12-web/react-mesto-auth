import { Popup } from '../Popup/Popup';
import succesImage from '../../images/success-image.svg';
import unSuccesImage from '../../images/unsuccess-image.svg';
import styles from './InfoTooltip.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент попапа статуса отправки формы авторизации/регистрации (удачно / не удачно)
 * @component
 * @param { Object } props
 * @param {bool} props.isSuccessResult - состояние отправки формы регистрации/авторизации (успешно / не успешно)
 * @param {Array} props.props - параметры, передаваемые в попап (состояние открытия попапа,
 * имя модификатора класса попапа, функцию закрытия попапа)
 */

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

InfoTooltip.propTypes = {
  isSuccessResult: PropTypes.bool,
  props: PropTypes.array,
};
