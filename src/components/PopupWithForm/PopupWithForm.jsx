import { Popup } from '../Popup/Popup';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';
import PropTypes from 'prop-types';

/**
 * Компонент попапа с формой
 * @component
 * @param { Object } props
 * @param { boolean } props.isOpen - состояние открытия попапа
 * @param { function } props.onSubmit - функция отправки формы
 * @param { string } props.name - имя формы
 * @param { string } props.title - заголовок попапа с формой
 * @param { function } props.onClose - функция закрытия попапа
 * @param { string } props.submitText - текст кнопки отправки формы
 * @param {{ children: JSX.Element }} props.children - содержимое попапа
 */
export const PopupWithForm = ({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  submitText,
  children,
}) => {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <Title>{title}</Title>
      <Form
        onSubmit={onSubmit}
        name={name}
        children={children}
        submitText={submitText}
      >
        {children}
      </Form>
    </Popup>
  );
};

PopupWithForm.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
  submitText: PropTypes.string,
  children: PropTypes.node,
};
