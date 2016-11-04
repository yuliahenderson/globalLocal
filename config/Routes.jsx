import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../client/components/app.jsx';
import DestinationSearch from '../client/components/destinations/destinationSearch.jsx';
import Barcelona from '../client/components/destinations/barcelona.jsx';


const Routes = () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="destinations" component={DestinationSearch} />
      <Route path="barcelona" component={Barcelona} />
    </Router>
  );
};

export default Routes;
