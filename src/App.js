import React, { Component } from 'react';
import './App.css';
import Map from './map'
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel'

class App extends Component {

  constructor(props){
    super(props) //grabs in react default props, since this app extends the normal react component 
    this.state = {
      map: null,
      latitude: 53.3498,
      longitude: -6.2603,
      style: 'mapbox://styles/mapbox/dark-v10',
      places:[
          {name: '13 Crosby Street', latitude: 40.7128, longitude: -74.006}
      ]
    }

  }
  render(){
    return (
      <div className="App">
        <Search app = {this}></Search>
        <PlacesPanel app = {this}></PlacesPanel>
        <Toggler app = {this}></Toggler>
        {/* in our map, tell it that that states exist  */}
        <Map app = {this}></Map>
      </div>
    );
  }
  
}

export default App;
