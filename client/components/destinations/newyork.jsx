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

class NewYork extends React.Component {

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 40.7831, lng: -73.9712},
        zoom:12,
        mapTypeId: 'roadmap',
    });
         let infowindow = new google.maps.InfoWindow;
         // let contentGothamMarket = '<p class="contentText">Gotham West Market is the first-of-its-kind day and night market dining destination in Hell’s Kitchen. <a class="locationLink" href="http://gothamwestmarket.com" target="_blank">Find out more...</a></p>';

         let markerGothamMarket = new google.maps.Marker( {
          position: {lat: 40.7622707, lng: -73.9967042},
          map: this.map,
          title: 'Gotham Market'
        });

         google.maps.event.addListener(markerGothamMarket, 'click', function() {
         let markerGothamMarketContent = '<p class="contentText">Gotham West Market is ' +
         'the first-of-its-kind day and night market dining destination in Hell’s Kitchen.' +
         '<a class="locationLink" href="http://gothamwestmarket.com" target="_blank"> Find' +
         'out more...</a></p>';
         infowindow.setContent(markerGothamMarketContent);
         infowindow.open(this.map, markerGothamMarket );
         });

          let markerSohoHouse = new google.maps.Marker( {
          position: {lat: 40.7406268, lng: -74.0060203},
          map: this.map,
          url: 'https://www.sohohouseny.com/',
          title: 'Soho House New York'
        });
    google.maps.event.addListener(markerSohoHouse, 'click', function() {
      let markerSohoHouseContent = '<p class="contentText">Soho House New York. Invite-only hip boutique hotel, ' +
      'restaurant and bar. <a class="locationLink"' +
      'href="https://www.sohohouseny.com/" target="_blank">Find out more...</a></p>';
      infowindow.setContent(markerSohoHouseContent);
      infowindow.open(this.map, markerSohoHouse)
    });

          let markerTopOfTheRock = new google.maps.Marker( {
          position: {lat: 40.7587402, lng: -73.9786736},
          map: this.map,
          title: 'Top Of the Rock'
        });
    google.maps.event.addListener(markerTopOfTheRock, 'click', function() {
       let markerTopOfTheRockContent = '<p class="contentText">Top of the Rock Observation Deck. ' +
       'The best view point on Manhattan. <a class="locationLink"' +
       'href="https://www.topoftherocknyc.com/buy-tickets" target="_blank">Get tickets</a></p>';
       infowindow.setContent(markerTopOfTheRockContent);
       infowindow.open(this.map, markerTopOfTheRock)
    });
          let markerChelseaMarket = new google.maps.Marker( {
          position: {lat: 40.7421218, lng: -74.005124},
          map: this.map,
          title: 'Chelsea Market'
        });
    google.maps.event.addListener(markerChelseaMarket, 'click', function() {
       let markerChelseaMarketContent = '<p class="contentText">Chelsea Market, an urban food court. <a class="locationLink"' +
       'href="http://www.chelseamarket.com/" target="_blank">Find out more...</a></p>';
       infowindow.setContent(markerChelseaMarketContent);
       infowindow.open(this.map, markerChelseaMarket)
    });
          let markerHighLine = new google.maps.Marker( {
          position: {lat: 40.7479925, lng: -74.0047649},
          map: this.map,
          title: 'The High Line'
        });
    google.maps.event.addListener(markerHighLine , 'click', function() {
       let markerHighLineContent = '<p class="contentText">The High Line, a public park built on a historic freight rail' +
       'line elevated above the streets on Manhattan\'s West Side. A great way to walk from middtown to downtown. ' +
       '<a class="locationLink" href="http://www.thehighline.org/" target="_blank">Learn more...</a></p>';
       infowindow.setContent(markerHighLineContent);
       infowindow.open(this.map, markerHighLine )
    });

          let markerTheSpottedPig = new google.maps.Marker( {
          position: {lat: 40.7356067, lng: -74.0066706},
          map: this.map,
          title: 'The Spotted Pig'
        });
    google.maps.event.addListener(markerTheSpottedPig , 'click', function() {
       let markerTheSpottedPigContent = '<p class="contentText">The Spotted Pig, ' +
       'a sceney European gustropub in the West Village. ' +
       '<a class="locationLink" href="http://www.thespottedpig.com/#home" target="_blank">Check out the menu</a></p>';
       infowindow.setContent(markerTheSpottedPigContent);
       infowindow.open(this.map, markerTheSpottedPig )
    });
  }


render(){
  return(
    <div>
      <Header />
      <section id="newYorkView">
      <h2>NEW YORK</h2>
      </section>
      <p className="locationPage">Click on the pin to find out more about the place</p>
      <div
        ref="map" style={mapStyle} ref="map">
      </div>
    </div>
  )
}
}

export default NewYork;
