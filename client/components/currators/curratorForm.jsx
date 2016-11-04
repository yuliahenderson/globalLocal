import React from 'react';

const propTypes = {
  signUp: React.PropTypes.func,
  buttonText: React.PropTypes.string,
  closeModal: React.PropTypes.func,
};
class CurratorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: '', email: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
      this.props.signUp(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h2 id="close" onClick={this.props.closeModal}>x</h2>
        <p>Sign up for updates</p>
        <input
          className="email_password"
          type="first_name"
          name="first_name"
          value={this.state.first_name}
          placeholder="first_name"
          onChange={this.handleInputChange}
        />
        <input
          className="email_password"
          type="last_name"
          name="last_name"
          value={this.state.last_name}
          placeholder="last_name"
          onChange={this.handleInputChange}
        />
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
CurratorForm.propTypes = propTypes;
export default CurratorForm;
