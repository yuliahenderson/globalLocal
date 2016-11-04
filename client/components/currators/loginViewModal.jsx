import React from 'react';
import CurratorForm from './curratorForm.jsx';

const propTypes = {
  closeModal: React.PropTypes.func,
  signUp: React.PropTypes.func,
  buttonText: React.PropTypes.string.isRequired,
};

const LoginViewModal = ({ closeModal, signUp, buttonText }) => {
  return (
    <div>
      <div id="login-modal">
        <div id="show-login">
          <CurratorForm closeModal={closeModal} signUp={signUp} buttonText={buttonText} />
        </div>
      </div>
    </div>
  );
};

LoginViewModal.propTypes = propTypes;
export default LoginViewModal;
