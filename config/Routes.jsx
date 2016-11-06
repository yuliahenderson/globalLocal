import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Header from '../client/components/subscribers/header.jsx';
import App from '../client/components/app.jsx';
import DestinationSearch from '../client/components/destinations/destinationSearch.jsx';
import Barcelona from '../client/components/destinations/barcelona.jsx';
import NewYork from '../client/components/destinations/newyork.jsx';
import BigIslandHawaii from '../client/components/destinations/bigislandhawaii.jsx';
import London from '../client/components/destinations/london.jsx';
import Moscow from '../client/components/destinations/moscow.jsx';
import StPetersburg from '../client/components/destinations/saintpetersburg.jsx';


const Routes = () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/" component={Header}/>
      <Route path="destinations" component={DestinationSearch} />
      <Route path="barcelona" component={Barcelona} />
      <Route path="newyork" component={NewYork} />
      <Route path="bigislandhawaii" component={BigIslandHawaii} />
      <Route path="london" component={London} />
      <Route path="moscow" component={Moscow} />
      <Route path="saintpetersburg" component={StPetersburg} />
      </Router>
  );
};

export default Routes;
