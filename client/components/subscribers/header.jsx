import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Login from './login.jsx';
import { Link } from 'react-router';
import SubscriberForm from './subscriberForm.jsx';

class Header extends React.Component {
  constructor(props){
    super(props);

  this.signUp = this.signUp.bind(this);
  }

  componentDidMount() {
  this.updateAuth();
  }

  updateAuth() {
    this.setState({
      toke: cookie.load('token'),
    });
  }

  signUp(subscriberDetails) {
    request.post('/api/signup')
           .send(subscriberDetails)
           .then(() => {
            this.updateAuth();
           });
  }


render(){
  return(
    <div>
    <header className="clearfix" id="navigation">
      <logo><Link className="logoClick" to="/">globalLOCAL</Link></logo>
      <nav>
        <Login signUp={this.signUp} />
      </nav>
    </header>
    </div>
  )
 }
}


export default Header;

