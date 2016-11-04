import React from 'react';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';
import Login from '../currators/login.jsx';

const mapStyle = {
      height: "60vh",
      width: "98.5vw",
      top: 20,
      padding: 0,
    };

class NewYork extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 40.7831, lng: -73.9712},
        zoom:11,
        mapTypeId: 'roadmap',
    });
         let contentString = '<p>Gotham Market is a trendy place to eat. <a className="locationLink" href="http://gothamwestmarket.com" target="_blank">Find out more...</a></p>';
         let infowindow = new google.maps.InfoWindow({
          content: contentString
    });
         let markerGothamMarket = new google.maps.Marker( {
          position: {lat: 40.7622707, lng: -73.9967042},
          map: this.map,
          url: 'http://gothamwestmarket.com/' ,
          title: 'Gotham Market'
        });
    google.maps.event.addListener(markerGothamMarket, 'click', function() {
      infowindow.open(this.map, markerGothamMarket);
    // window.open(markerGothamMarket.url);
    });
          let markerSohoHouse = new google.maps.Marker( {
          position: {lat: 40.7406268, lng: -74.0060203},
          map: this.map,
          url: 'https://www.sohohouseny.com/',
          title: 'Soho House New York'
        });
    google.maps.event.addListener(markerSohoHouse, 'click', function() {
    window.location.href = markerSohoHouse.url;
    });
  }


render(){
  return(
    <div>
    <header className="clearfix" id="navigation">
      <logo>globalLOCAL</logo>
      <nav>
        <Login signUp={this.signUp} logIn={this.logIn} />
      </nav>
    </header>
    <section id="cityView">
    <h2>NEW YORK</h2>
    </section>
    <div
      ref="map" style={mapStyle} ref="map">
    </div>
    </div>
  )
}
}

export default NewYork;
