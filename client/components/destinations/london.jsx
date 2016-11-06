import React from 'react';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';
import Login from '../subscribers/login.jsx';
import Header from '../subscribers/header.jsx';

const mapStyle = {
      height: "60vh",
      width: "98.5vw",
      padding: 0,
    };

class London extends React.Component {
   componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 51.515419, lng: -0.141099},
        zoom:12,
        mapTypeId: 'roadmap',
    });
         let infowindow = new google.maps.InfoWindow;

         let markerOxoTower = new google.maps.Marker( {
          position: {lat: 51.5084128, lng: -0.1084843},
          map: this.map,
          title: 'OXO Tower Restaurant'
        });
         google.maps.event.addListener(markerOxoTower, 'click', function() {
         let markerOxoTowerContent = '<p class="contentText">OXO Tower Restaurant and Bar, ' +
         'a great place to have a drink or dine with the view. ' +
         '<a class="locationLink" href="http://www.oxotower.co.uk/who/oxo-tower-restaurant-bar-brasserie/" target="_blank"> Find ' +
         'out more...</a></p>';
         infowindow.setContent(markerOxoTowerContent);
         infowindow.open(this.map, markerOxoTower );
         });

         let markerTheEngineer = new google.maps.Marker( {
          position: {lat: 51.5400428, lng: -0.1507151},
          map: this.map,
          title: 'The Engineer Pub'
        });
         google.maps.event.addListener(markerTheEngineer, 'click', function() {
         let markerTheEngineerContent = '<p class="contentText">The Engineer, ' +
         'a stylish gastropub, located in the beautiful area of Primrose Hill. ' +
         '<a class="locationLink" href="https://www.theengineerprimrosehill.co.uk/" target="_blank"> Find ' +
         'out more...</a></p>';
         infowindow.setContent(markerTheEngineerContent);
         infowindow.open(this.map, markerTheEngineer );
         });

         let markerBrickLane = new google.maps.Marker( {
          position: {lat: 51.5219897, lng: -0.0738814},
          map: this.map,
          title: 'Brick Lane'
        });
         google.maps.event.addListener(markerBrickLane, 'click', function() {
         let markerBrickLaneContent = '<p class="contentText">Brick Lane, ' +
         'a great area to find authentic indian food.</p>';
         infowindow.setContent(markerBrickLaneContent);
         infowindow.open(this.map, markerBrickLane );
         });

         let markerTheMall = new google.maps.Marker( {
          position: {lat: 51.5038808, lng: -0.1378626},
          map: this.map,
          title: 'The Mall'
        });
         google.maps.event.addListener(markerTheMall, 'click', function() {
         let markerTheMallContent = '<p class="contentText">The Mall, ' +
         'a beautiful walkway from the Trafalgar Square to the Buckingham Palace.</p>';
         infowindow.setContent(markerTheMallContent);
         infowindow.open(this.map, markerTheMall );
         });

}
render(){
  return(
    <div>
      <Header />
      <section id="londonView">
      <h2>LONDON</h2>
      </section>
      <p className="locationPage">Click on the pin to find out more about the place</p>
      <div
        ref="map" style={mapStyle} ref="map">
      </div>
    </div>
  )
 }
}

export default London;
