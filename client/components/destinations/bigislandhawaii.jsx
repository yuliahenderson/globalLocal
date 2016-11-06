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

class BigIslandHawaii extends React.Component {
   componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 19.5429, lng: -155.6659},
        zoom:8,
        mapTypeId: 'roadmap',
    });
         let infowindow = new google.maps.InfoWindow;
         // let contentGothamMarket = '<p class="contentText">Gotham West Market is the first-of-its-kind day and night market dining destination in Hell’s Kitchen. <a class="locationLink" href="http://gothamwestmarket.com" target="_blank">Find out more...</a></p>';

         let markerMaunaKea = new google.maps.Marker( {
          position: {lat: 19.8208343, lng: -155.468064},
          map: this.map,
          title: 'Mauna Kea Observatory'
        });

         google.maps.event.addListener(markerMaunaKea, 'click', function() {
         let markerMaunaKeaContent = '<p class="contentText">The summit of Mauna Kea is one of the '+
         'best spots in the world for astronomical observation due to its unique location. Dark skies ' +
         'and dry atmosphere make it an excellent spot for stargazing. ' +
         '<a class="locationLink" href="http://maunakea.com/" target="_blank">Book an Adventure</a></p>';
         infowindow.setContent(markerMaunaKeaContent);
         infowindow.open(this.map, markerMaunaKea );
         });

         let markerPokeShack = new google.maps.Marker( {
          position: {lat: 19.6078985, lng: -155.9771668},
          map: this.map,
          title: 'Da Poke Shack'
        });

         google.maps.event.addListener(markerPokeShack , 'click', function() {
         let markerPokeShackContent = '<p class="contentText">The Best Poke Bowls on the Big ' +
         'Island of Hawaii. ' +
         '<a class="locationLink" href="http://dapokeshack.com/menu/" target="_blank">Check out the menu</a></p>';
         infowindow.setContent(markerPokeShackContent);
         infowindow.open(this.map, markerPokeShack  );
         });

         let markerWaialeaBeach = new google.maps.Marker( {
          position: {lat: 19.9814898, lng: -155.8287384},
          map: this.map,
          title: 'Waialea Beach'
        });

         google.maps.event.addListener(markerWaialeaBeach , 'click', function() {
         let markerWaialeaBeachContent = '<p class="contentText">Waialea Beach, ' +
         'a great place for snorkling and swiming. ' +
         '<a class="locationLink" href="http://www.lovebigisland.com/big-island-beaches/waialea-beach/"' +
         'target="_blank">Find out more...</a></p>';
         infowindow.setContent(markerWaialeaBeachContent);
         infowindow.open(this.map, markerWaialeaBeach  );
         });

         let markerWaipioValley = new google.maps.Marker( {
          position: {lat: 20.1114613, lng: -155.6125594},
          map: this.map,
          title: 'Waipio Valley'
        });

         google.maps.event.addListener(markerWaipioValley , 'click', function() {
         let markerWaipioValleyContent = '<p class="contentText">Waipio Valley, ' +
         'once was home to the Hawaiian Royalty. Beautiful place to visit and walk ' +
         'on the black sand beach. The way down is accessable only on the 4 wheel drive. ' +
         '<a class="locationLink" href="http://www.best-big-island-hawaii.com/waipio-valley.html"' +
         'target="_blank">Find out more...</a></p>';
         infowindow.setContent(markerWaipioValleyContent);
         infowindow.open(this.map, markerWaipioValley );
         });

         let markerVolcanoesPark = new google.maps.Marker( {
          position: {lat: 19.4193697, lng: -155.288496},
          map: this.map,
          title: 'Volcanoes National Park'
        });

         google.maps.event.addListener(markerVolcanoesPark , 'click', function() {
         let markerVolcanoesParkContent = '<p class="contentText">Kīlauea is one of the most ' +
         'active volcanoes in the world. ' +
         '<a class="locationLink" href="http://www.lovebigisland.com/hawaii-volcanoes-national-park/"' +
         'target="_blank">Find out more...</a></p>';
         infowindow.setContent(markerVolcanoesParkContent);
         infowindow.open(this.map, markerVolcanoesPark );
         });
}
render(){
  return(
    <div>
      <Header />
      <section id="hawaiiView">
      <h2>BIG ISLAND</h2>
      </section>
      <p className="locationPage">Click on the pin to find out more about the place</p>
      <div
        ref="map" style={mapStyle} ref="map">
      </div>
    </div>
  )
 }
}

export default BigIslandHawaii;
