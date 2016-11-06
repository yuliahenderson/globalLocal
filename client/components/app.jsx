import React from 'react';
import Header from './subscribers/header.jsx';
import { Link } from 'react-router';
// import request from 'superagent';
// import cookie from 'react-cookie';
// import Login from './subscribers/login.jsx';
// import { Link } from 'react-router';
// import SubscriberForm from './subscribers/subscriberForm.jsx';


class App extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.logIn = this.logIn.bind(this);
//     this.signUp = this.signUp.bind(this);
//     // this.signOut = this.signOut.bind(this);
//     // this.sendDestination = this.sendDestination.bind(this);
//   }
//   componentDidMount() {
//     this.updateAuth();
//     // if(cookie.load('token')) {
//     //   // this.getCurrentSubscriberDestinations();
//     // }
//   }
//   // getCurrentSubscriberDestinations() {
//   //   request.get('/api/destinations')
//   //          .then((response) => {
//   //           const destinations = response.body;
//   //           // this.setState({ destinations });
//   //          })
//   //          .catch(() => {
//   //           this.updateAuth();
//   //          })
//   // }
//   // sendDestination({ city_name }) {
//   //   request.post('/api/destinations')
//   //          .send({ city_name })
//   //          .then(() => {
//   //           this.getCurrentSubscriberDestinations();
//   //          });
//   // }
//   // signOut() {
//   //   request.post('/api/signOut')
//   //          .then(() => this.updateAuth());
//   // }
//   updateAuth() {
//     this.setState({
//       toke: cookie.load('token'),
//     });
//   }
//   // signUp(subscriberDetails) {
//   //   request.post('/api/signup')
//   //          .send(subscriberDetails)
//   //          .then(() => {
//   //           this.updateAuth();
//   //           // this.getCurrentSubscriberDestinations();
//   //          });
//   // }
//   signUp(subscriberDetails) {
//     request.post('/api/signup')
//            .send(subscriberDetails)
//            .then(() => {
//             this.updateAuth();
//            //  // this.getCurrentSubscriberDestinations();
//            });
// }
  render() {
    return(
    // let subscriberDisplayElement;
    // if (this.state.token) {
    //   subscriberDisplayElement = (
    //     <div>
    //       <header className="clearfix" id="navigation">
    //       <logo>GL</logo>
    //       <nav>
    //         <div className="logout-link">
    //           <button className="logout" onClick={this.signOut}>LogOut</button>
    //         </div>
    //       </nav>
    //       </header>
    //       <SubscriberAccount />
    //       <footer>
    //       </footer>
    //     </div>
    //   );
    // } else {
    //   subscriberDisplayElement = (
        <div>
          <Header />
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
    // return (
    //   <div>
    //     {subscriberDisplayElement}
    //   </div>
    // );
  }


export default App;
