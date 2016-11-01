import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Login from './currators/login.jsx';
import CurratorForm from './currators/curratorForm.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: [],
    }
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendDestination = this.sendDestination.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if(cookie.load('token')) {
      this.getCurrentCurratorDestinations();
    }
  }
  getCurrentCurratorDestinations() {
    request.get('/api/destinations')
           .then((response) => {
            const destinations = response.body;
            this.setState({ destinations });
           })
           .catch(() => {
            this.updateAuth();
           })
  }
  sendDestination({ city_name }) {
    request.post('/api/destinations')
           .send({ city_name })
           .then(() => {
            this.getCurrentCurratorDestinations();
           });
  }
  signOut() {
    request.post('/api/signOut')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      toke: cookie.load('token'),
    });
  }
  logIn(userDetails) {
    request.post('/api/login')
           .send(userDetails)
           .then(() => {
            this.updateAuth();
            this.getCurrentCurratorDestinations();
            // this.setState({

            // })
           });
  }
  signUp(userDetails) {
    request.post('/api/signup')
           .send(userDetails)
           .then(() => {
            this.updateAuth();
            this.getCurrentCurratorDestinations();
           });
  }
  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <div>
          <header className="clearfix" id="navigation">
          <logo>GL</logo>
          <nav>
            <div className="logout-link">
              <button className="logout" onClick={this.signOut}>LogOut</button>
            </div>
          </nav>
          </header>
          <CurratorAccount />
          <footer>
          </footer>
        </div>
      );
    } else {
      userDisplayElement = (
        <div>
          <header className="clearfix" id="navigation">
            <logo>GL</logo>
            <nav>
              <Login signUp={this.signUp} login={this.logIn} />
            </nav>
          </header>

          <footer>
          </footer>
        </div>
      );
    }
    return (
      <div>
        {userDisplayElement}
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
