import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { Link } from 'react-router';
import Barcelona from './barcelona.jsx';
import Login from '../subscribers/login.jsx';
import Header from '../subscribers/header.jsx';

const mapStyle = {
      height: "90vh",
      width: "100vw",
      top: 20,
      // left: 50,
      padding: 0,
    };

class DestinationSearch extends React.Component {
    constructor(props){
        super(props);
    }

componentDidMount(){
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 0, lng: 0},
        zoom:2,
        mapTypeId: 'roadmap',
    });
         let markerBarcelona = new google.maps.Marker( {
          position: {lat: 41.385064, lng: 2.173403},
          map: this.map,
          url: 'http://localhost:8080/#/barcelona',
          title: 'Barcelona'
        });
    google.maps.event.addListener(markerBarcelona, 'click', function() {
    window.location.href = markerBarcelona.url;
    });

        //   let markerBerlin = new google.maps.Marker( {
        //   position: {lat: 52.5200, lng: 13.4050},
        //   map: this.map,
        //   title: 'Berlin'
        // });
          let markerLondon = new google.maps.Marker( {
          position: {lat: 51.5074, lng: 0.1278},
          map: this.map,
          url: 'http://localhost:8080/#/london',
          title: 'London'
        });
    google.maps.event.addListener(markerLondon, 'click', function() {
    window.location.href = markerLondon.url;
    });
          let markerStPetersburg = new google.maps.Marker( {
          position: {lat: 59.9343, lng: 30.3351},
          map: this.map,
          url: 'http://localhost:8080/#/saintpetersburg',
          title: 'Saint-Petersburg'
        });
    google.maps.event.addListener(markerStPetersburg, 'click', function() {
    window.location.href = markerStPetersburg.url;
    });
          let markerMoscow = new google.maps.Marker( {
          position: {lat: 55.7558, lng: 37.617},
          map: this.map,
          url: 'http://localhost:8080/#/moscow',
          title: 'Moscow'
        });
    google.maps.event.addListener(markerMoscow, 'click', function() {
    window.location.href = markerMoscow.url;
    });
          let markerNewYork = new google.maps.Marker( {
          position: {lat: 40.730610, lng: -73.935242},
          map: this.map,
          url: 'http://localhost:8080/#/newyork',
          title: 'New York'
        });
    google.maps.event.addListener(markerNewYork, 'click', function() {
    window.location.href = markerNewYork.url;
    });
          let markerBigIslandHawaii = new google.maps.Marker( {
          position: {lat: 19.5429, lng: -155.6659},
          map: this.map,
          url: 'http://localhost:8080/#/bigislandhawaii',
          title: 'Big Island Hawaii'
        });
    google.maps.event.addListener(markerBigIslandHawaii, 'click', function() {
    window.location.href = markerBigIslandHawaii.url;
    });

}

render(){
  return(
    <div>
      <Header />
        <h1>CLICK THE PIN ON THE MAP:</h1>
     <div
       ref="map" style={mapStyle} ref="map">
     </div>
     </div>
  )
}


    // <div className ="city_view" id="barcelona">
    // <Link to="barcelona">
    // <p className="city_name">BARCELONA</p>
    // </Link>
    // </div>
    // <div className ="city_view" id="newyork">
    // <Link to="newyork">
    // <p className="city_name">NEW YORK</p>
    // </Link>
    // </div>
}

export default DestinationSearch;

































