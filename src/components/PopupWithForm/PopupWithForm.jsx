import PropTypes from 'prop-types';
import { Popup } from '../Popup/Popup';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';

const PopupWithForm = ({
  isOpen,
  onClose,
  onSubmit,
  name,
  title,
  buttonText,
  children,
}) => {
  return (
    <Popup isOpen={isOpen} name={name} title={title} onClose={onClose}>
      <Title>{title}</Title>
      <Form
        onSubmit={onSubmit}
        name={name}
        children={children}
        buttonText={buttonText}
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
  buttonText: PropTypes.string,
  children: PropTypes.node,
};

export default PopupWithForm;
