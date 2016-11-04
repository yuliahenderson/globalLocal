import React from 'react';
import { Link } from 'react-router';
import Geosuggest from 'react-geosuggest';

const mapStyle = {
      height: "60vh",
      width: "90vw",
      top: 20,
      left: 50,
      padding: 0,
    };

class Barcelona extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
        center: {lat: 41.385064, lng: 2.173403},
        zoom:12,
        mapTypeId: 'roadmap',
    });
         let markerSohoHouse = new google.maps.Marker( {
          position: {lat: 41.3784473, lng: 2.1793251},
          map: this.map,
          url: 'http://localhost:8080/#/barcelona',
          title: 'Soho House Barcelona'
        });
          let markerWhotel = new google.maps.Marker( {
          position: {lat: 41.3685139, lng: 2.1901846},
          map: this.map,
          url: 'http://localhost:8080/#/barcelona',
          title: 'W Hotel Barcelona'
        });
  }

render(){
  return(
    <div
      ref="map" style={mapStyle} ref="map">
    </div>
  )
}
}

    // <h2>BARCELONA</h2>
    // <h3></h3>
    // <p className="placeDescription">
    //  Soho House Barcelona is a members' club and hotel in the city's Gothic
    //  Quarter, facing Port Vell marina.
    // <iframe
    //   width="250"
    //   height="250"
    //   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB3YLYJ2zjI6KCzh8_VzHmuOs6zJ0PuzGc&q=Soho+House+Barcelona,Barcelona+Spain">
    // </iframe>
    // </p>

export default Barcelona;
