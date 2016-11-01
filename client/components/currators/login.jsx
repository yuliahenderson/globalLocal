import React from 'react';
import LoginView from './loginView.jsx';
import LoginViewModal from './loginViewModal.jsx';
import RegisterView from './RegisterView.jsx';

const propTypes = {
  logIn: React.PropTypes.func,
  signUp: React.PropTypes.func,
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      buttonText: '',
    };
    this.openModalLogin = this.openModalLogin.bind(this);
    this.openModalSignup = this.openModalSignup.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModalLogin() {
    this.setState({
      modalOpen: true,
      buttonText: 'login',
    });
  }
  openModalSignup() {
    this.setState({
      modalOpen: true,
      buttonText: 'Become a Currator',
    });
  }
  closeModal() {
    this.setState({
      modalOpen: false,
      buttonText: 'login'
    });
  }
  render() {
    return(
      <div>
        <LoginView
          openModal={this.openModalLogin}
        />
        <RegisterView
          openModal={this.openModalSignup}
        />
        {this.state.modalOpen ?
          <LoginViewModal
            closeModal={this.closeModal}
            login={this.props.logIn}
            signUp={this.props.signUp}
            buttonText={this.state.buttonText}
          /> : false }
      </div>
    );
  }
}
Login.propTypes = propTypes;
export default Login;
