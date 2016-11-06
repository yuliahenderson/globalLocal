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

class StPetersburg extends React.Component {
   componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 59.9343, lng: 30.3351},
        zoom:13,
        mapTypeId: 'roadmap',
    });

         let infowindow = new google.maps.InfoWindow;

         let markerHermitage = new google.maps.Marker( {
          position: {lat: 59.9398317, lng: 30.3145597},
          map: this.map,
          title: 'The Hermitage Museum'
        });
         google.maps.event.addListener(markerHermitage, 'click', function() {
         let markerHermitageContent = '<p class="contentText">The State Hermitage Museum, ' +
         'one of the largest and oldest museums in the world.' +
         '<a class="locationLink" href="https://www.hermitagemuseum.org" target="_blank"> Find ' +
         'out more...</a></p>';
         infowindow.setContent(markerHermitageContent);
         infowindow.open(this.map, markerHermitage );
         });

         let markerCafeZinger = new google.maps.Marker( {
          position: {lat: 59.935711, lng: 30.325744},
          map: this.map,
          title: 'Cafe Zinger'
        });
         google.maps.event.addListener(markerCafeZinger, 'click', function() {
         let markerCafeZingerContent = '<p class="contentText">Café Singer, ' +
         'a great place to have breakfast and then wander around the book shop on the ground floor.</p>';
         infowindow.setContent(markerCafeZingerContent);
         infowindow.open(this.map, markerCafeZinger );
         });

         let markerWHotel = new google.maps.Marker( {
          position: {lat: 59.9350403, lng: 30.3091443},
          map: this.map,
          title: 'W Hotel Rooftop Terrace'
        });
         google.maps.event.addListener(markerWHotel, 'click', function() {
         let markerWHotelContent = '<p class="contentText">The W Hotel Rooftop Terrace, ' +
         'a great bar and small plates place to enjoy amazing views of the city.</p>';
         infowindow.setContent(markerWHotelContent);
         infowindow.open(this.map, markerWHotel );
         });

         let markerTerrassa = new google.maps.Marker( {
          position: {lat: 59.9337465, lng: 30.3226412},
          map: this.map,
          title: 'Terrassa'
        });
         google.maps.event.addListener(markerTerrassa, 'click', function() {
         let markerTerrassaContent = '<p class="contentText">Terrassa, ' +
         'a modern eatery with views.' +
         '<a class="locationLink" href="http://ginza.ru/spb/restaurant/terrassa" target="_blank"> Check out ' +
         'the menu</a></p>'
         infowindow.setContent(markerTerrassaContent);
         infowindow.open(this.map, markerTerrassa );
         });

         let markerRussianMuseum = new google.maps.Marker( {
          position: {lat: 59.9385918, lng: 30.3322212},
          map: this.map,
          title: 'Russian Museum'
        });
         google.maps.event.addListener(markerRussianMuseum, 'click', function() {
         let markerRussianMuseumContent = '<p class="contentText">The State Russian Museum, ' +
         'the largest collection of Russian fine art in St.Petersburg. ' +
         '<a class="locationLink" href="http://en.rusmuseum.ru/" target="_blank"> Find out ' +
         'more...</a></p>'
         infowindow.setContent(markerRussianMuseumContent);
         infowindow.open(this.map, markerRussianMuseum );
         });

}
render(){
  return(
    <div>
      <Header />
      <section id="stpeteView">
      <h2 className="stPeteHeadline">ST PETERSBURG</h2>
      </section>
      <p className="locationPage">Click on the pin to find out more about the place</p>
      <div
        ref="map" style={mapStyle} ref="map">
      </div>
    </div>
  )
 }
}

export default StPetersburg;
