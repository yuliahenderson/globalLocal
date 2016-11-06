import React from 'react';

const propTypes = {
  signUp: React.PropTypes.func,
  buttonText: React.PropTypes.string,
  closeModal: React.PropTypes.func,
};
class SubscriberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }

  closeModal() {
    this.setState({
      modalOpen: false,
      buttonText: 'Become an Insider'
    });
  }
  handleSubmit(e) {
      e.preventDefault();
      this.props.signUp(this.state);
      this.props.closeModal();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h3 id="close" onClick={this.props.closeModal}>x</h3>
        <p className="signupForm">Sign up for updates:</p>
        <input
          className="email_password"
          type="email"
          name="email"
          value={this.state.email}
          placeholder="email"
          onChange={this.handleInputChange}
        />
        <input id="submit_button" type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}



        // <input
        //   className="email_password"
        //   type="lastname"
        //   name="lastname"
        //   value={this.state.lastname}
        //   placeholder="last name"
        //   onChange={this.handleInputChange}
        // />
SubscriberForm.propTypes = propTypes;
export default SubscriberForm;
