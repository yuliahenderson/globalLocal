
import React from 'react';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';


class Barcelona extends React.Component {

render(){
  return(
    <div>
    <h2>BARCELONA</h2>
    <h3></h3>
    <p className="placeDescription">
     Soho House Barcelona is a members' club and hotel in the city's Gothic
     Quarter, facing Port Vell marina.
    <iframe
      width="250"
      height="250"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB3YLYJ2zjI6KCzh8_VzHmuOs6zJ0PuzGc&q=Soho+House+Barcelona,Barcelona+Spain">
    </iframe>
    </p>
    </div>
  )
}
}

export default Barcelona;
