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

class Moscow extends React.Component {
   componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 55.7558, lng: 37.617},
        zoom:12,
        mapTypeId: 'roadmap',
    });

         let infowindow = new google.maps.InfoWindow;

         let markerILoveCake = new google.maps.Marker( {
          position: {lat: 55.762467, lng: 37.591972},
          map: this.map,
          title: 'I Love Cake'
        });
         google.maps.event.addListener(markerILoveCake, 'click', function() {
         let markerILoveCakeContent = '<p class="contentText">I Love Cake, ' +
         'the best breakfast place in Moscow with great coffee, egg dishes and amazing desserts. ' +
         'Located in the beautiful area of Patriarchy Ponds.</p>';
         infowindow.setContent(markerILoveCakeContent);
         infowindow.open(this.map, markerILoveCake );
         });

         let markerBarStrelka = new google.maps.Marker( {
          position: {lat: 55.742569, lng: 37.609252},
          map: this.map,
          title: 'Strelka'
        });
         google.maps.event.addListener(markerBarStrelka, 'click', function() {
         let markerBarStrelkaContent = '<p class="contentText">Strelka, ' +
         'a cozy, stylish bar and restaurant right on the river with a great view. ' +
         '<a class="locationLink" href="http://strelka.com/en/bar" target="_blank"> Find ' +
         'out more...</a></p>';
         infowindow.setContent(markerBarStrelkaContent);
         infowindow.open(this.map, markerBarStrelka );
         });

         let markerMendeleevBar = new google.maps.Marker( {
          position: {lat: 55.7642487, lng: 37.6172653},
          map: this.map,
          title: 'Mendeleev Bar'
        });
         google.maps.event.addListener(markerMendeleevBar, 'click', function() {
         let markerMendeleevBarContent = '<p class="contentText">Mendeleev Bar, ' +
         'a secret place hidden downstairs in the Chinese noodle shop. Amazing cocktails and atmosphere. ' +
         '<a class="locationLink" href="http://www.mendeleevbar.ru/" target="_blank"> Find ' +
         'out more...</a></p>';
         infowindow.setContent(markerMendeleevBarContent);
         infowindow.open(this.map, markerMendeleevBar );
         });

         let markerGorkyPark = new google.maps.Marker( {
          position: {lat: 55.7283648, lng: 37.6012908},
          map: this.map,
          title: 'Gorky Park'
        });
         google.maps.event.addListener(markerGorkyPark, 'click', function() {
         let markerGorkyParkContent = '<p class="contentText">Gorky Park, ' +
         'central park of Moscow with big green loans during the summer time and ' +
         'ice skating trails during the winter.</p>';
         infowindow.setContent(markerGorkyParkContent);
         infowindow.open(this.map, markerGorkyPark );
         });

         let markerPushkinMuseum = new google.maps.Marker( {
          position: {lat: 55.7473054, lng: 37.6051125},
          map: this.map,
          title: 'Pushkin Museum'
        });
         google.maps.event.addListener(markerPushkinMuseum, 'click', function() {
         let markerPushkinMuseumContent = '<p class="contentText">The Pushkin State Museum of Fine Arts, ' +
         'the largest museum of European art in Moscow. ' +
         '<a class="locationLink" href="http://www.arts-museum.ru/?lang=en" target="_blank"> Find ' +
         'out more...</a></p>';
         infowindow.setContent(markerPushkinMuseumContent);
         infowindow.open(this.map, markerPushkinMuseum );
         });

         let markerKhachapuri = new google.maps.Marker( {
          position: {lat: 55.763211, lng: 37.605275},
          map: this.map,
          title: 'Khachapuri'
        });
         google.maps.event.addListener(markerKhachapuri, 'click', function() {
         let markerKhachapuriContent = '<p class="contentText">Khachapuri, ' +
         'a casual restaurant of authentic Georgian cuisine. ' +
         '<a class="locationLink" href="http://hacha.ru/ru/menu" target="_blank"> Check out ' +
         'the menu</a></p>';
         infowindow.setContent(markerKhachapuriContent);
         infowindow.open(this.map, markerKhachapuri );
         });
}
render(){
  return(
    <div>
      <Header />
      <section id="moscowView">
      <h2>MOSCOW</h2>
      </section>
      <p className="locationPage">Click on a pin to find out more about a recommended place</p>
      <div
        ref="map" style={mapStyle} ref="map">
      </div>
    </div>
  )
 }
}

export default Moscow;
