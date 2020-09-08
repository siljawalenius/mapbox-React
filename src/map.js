import React, { Component } from "react";
import mapbox from "mapbox-gl"; //import mapbox from the mapbox thing we previously installed
import "./map.css";

class Map extends Component {
  componentDidMount() {

    const app = this.props.app;

    mapbox.accessToken =
      "pk.eyJ1Ijoic2N3MDkxIiwiYSI6ImNrZXR6eGx0cTBraTYyc28wZmRmdmI0OWoifQ.rjOl3X3jh9C5kEtH7v6zBw";

    var map = new mapbox.Map({
      container: "map",
      style: app.state.style,
      center: [app.state.longitude, app.state.latitude],
      zoom: 13,
    });

    const navigationControl = new mapbox.NavigationControl({
        //options would go in here

        showCompass:true
    });

    map.addControl(navigationControl)

    this.props.app.setState({
        map: map
    })
        
  }

  render() {

    const app = this.props.app
    const map = app.state.map

    if (map){
        map.setStyle(this.props.app.state.style)
    }

    return (
        <div id="map">map goes here</div>
    )

  }
}

export default Map;
