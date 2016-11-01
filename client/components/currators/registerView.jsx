import React from 'react';
import LoginViewModal from './loginViewModal.jsx';

const propTypes = {
  openModal: React.PropTypes.func,
};

class RegisterView extends React.Component {
  render() {
    return (
      <div className="register-link">
        <button
          className="register"
          onClick={this.props.openModal}
          >Become a Currator</button>
      </div>
    );
  }
};

RegisterView.propTypes = propTypes;
export default RegisterView;
