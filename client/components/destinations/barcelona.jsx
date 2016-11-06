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

class Barcelona extends React.Component {


  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 41.385064, lng: 2.173403},
        zoom:13,
        mapTypeId: 'roadmap',
    });
         let infowindow = new google.maps.InfoWindow;

         let markerSohoHouse = new google.maps.Marker( {
          position: {lat: 41.3784473, lng: 2.1793251},
          map: this.map,
          title: 'Soho House Barcelona'
        });
         google.maps.event.addListener(markerSohoHouse, 'click', function() {
         let markerSohoHouseContent = '<p class="contentText">Soho House Barcelona, ' +
         'hip boutique hotel in the city\'s Gothic Quarter. ' +
         '<a class="locationLink" href="https://www.sohohousebarcelona.com" target="_blank"> Find' +
         'out more...</a></p>';
         infowindow.setContent(markerSohoHouseContent);
         infowindow.open(this.map, markerSohoHouse );
         });


         let markerCuidadCondal = new google.maps.Marker( {
          position: {lat: 41.3888129, lng: 2.1668475},
          map: this.map,
          title: 'Cuidad Condal'
        });

         google.maps.event.addListener(markerCuidadCondal, 'click', function() {
         let markerCuidadCondalContent = '<p class="contentText">Cuidad Condal, authentic spanish ' +
         'restaurant. Enjoy outdoor seating and great tapas.</p>';
         infowindow.setContent(markerCuidadCondalContent);
         infowindow.open(this.map, markerCuidadCondal );
         });

         let markerCasaMila = new google.maps.Marker( {
          position: {lat: 41.3953805, lng: 2.1619614},
          map: this.map,
          title: 'Casa Milà'
        });

         google.maps.event.addListener(markerCasaMila, 'click', function() {
         let markerCasaMilaContent = '<p class="contentText">Casa Milà, popularly known as ‘La Pedrera’, ' +
         'one of the unique architectual buildings in Barcelona, designed by Antoni Gaudí. ' +
         '<a class="locationLink" href="https://www.lapedrera.com" target="_blank">Get Tickets</a></p>';
         infowindow.setContent(markerCasaMilaContent);
         infowindow.open(this.map, markerCasaMila );
         });


  }

render(){
  return(
    <div>
      <Header />
      <section id="barcelonaView">
      <h2>BARCELONA</h2>
      </section>
      <p className="locationPage">Click on the pin to find out more about the place</p>
      <div
        ref="map" style={mapStyle} ref="map">
      </div>
    </div>
  )
 }
}

export default Barcelona;
