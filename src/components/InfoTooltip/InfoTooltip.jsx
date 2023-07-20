import { Popup } from '../Popup/Popup';
import succesImage from '../../images/success-image.svg';
import unSuccesImage from '../../images/unsuccess-image.svg';
import styles from './InfoTooltip.module.css';
import PropTypes from 'prop-types';

/**
 * Компонент попапа статуса отправки формы авторизации/регистрации (удачно / не удачно)
 * @component
 * @param { Object } props
 * @param { boolean } props.isSuccessResult - состояние отправки формы регистрации/авторизации (успешно / не успешно)
 * @param { string | string[] } props.textTooltip - текст подсказки после отправки формы
 * @param { Array } props.props - параметры, передаваемые в попап (состояние открытия попапа,
 * имя модификатора класса попапа, функцию закрытия попапа)
 */

export const InfoTooltip = ({ isSuccessResult, textTooltip, ...props }) => {
  return (
    <Popup {...props}>
      <img
        className={styles.image}
        src={isSuccessResult ? succesImage : unSuccesImage}
        alt={isSuccessResult ? 'Успех' : 'Неудача'}
      />
      <p className={styles.text}>{textTooltip}</p>
    </Popup>
  );
};

InfoTooltip.propTypes = {
  isSuccessResult: PropTypes.bool,
  textTooltip: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  props: PropTypes.array,
};
