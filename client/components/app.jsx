import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Login from './currators/login.jsx';
import { Link } from 'react-router';
import CurratorForm from './currators/curratorForm.jsx';
import DestinationSearch from './destinations/destinationSearch.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [],
    }
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    // this.sendDestination = this.sendDestination.bind(this);
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
  // sendDestination({ city_name }) {
  //   request.post('/api/destinations')
  //          .send({ city_name })
  //          .then(() => {
  //           this.getCurrentCurratorDestinations();
  //          });
  // }
  signOut() {
    request.post('/api/signOut')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      toke: cookie.load('token'),
    });
  }
  logIn(curratorDetails) {
    request.post('/api/login')
           .send(curratorDetails)
           .then(() => {
            this.updateAuth();
            this.getCurrentCurratorDestinations();
           });
  }
  signUp(curratorDetails) {
    request.post('/api/signup')
           .send(curratorDetails)
           .then(() => {
            this.updateAuth();
            this.getCurrentCurratorDestinations();
           });
  }
  render() {
    let curratorDisplayElement;
    if (this.state.token) {
      curratorDisplayElement = (
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
      curratorDisplayElement = (
        <div>
          <header className="clearfix" id="navigation">
            <logo>globalLOCAL</logo>
            <nav>
              <Login signUp={this.signUp} logIn={this.logIn} />
            </nav>
          </header>
          <div id="main">
          <img className="main_logo" src="/stylesheets/main_logo.png" />
            <button className="get-started">
            <Link to="/destinations">
            GET STARTED
            </Link>
            </button>
          </div>
          <footer>
          </footer>
        </div>
      );
    }
    return (
      <div>
        {curratorDisplayElement}
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
