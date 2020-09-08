import React, { Component } from "react";
import "./toggler.css";

class Toggler extends Component {

    setLayer(url){
        this.props.app.setState({
            style: url
        })

    }


  render() { //this function is part of react
    const styles = [
       {name: "Dark", url: 'mapbox://styles/mapbox/dark-v10'},
       {name: "Light", url: 'mapbox://styles/mapbox/light-v10'},
       {name: "Outdoors", url: 'mapbox://styles/mapbox/outdoors-v11'}
    ]

    const buttons =  styles.map(style => {
        let className = ""
        if (style.url === this.props.app.state.style){
            className= 'selected'
        }




        return <button className = {className} onClick = {() => this.setLayer(style.url)}>
            {style.name}
        </button>
    })


    return (
        <div className="toggler"> 
    
        { //curly brackets = put in some JS
            buttons
        }
      
        </div>

    )
   
  }
}

export default Toggler;
