import React, {Component} from 'react'
import './search.css'

class Search extends Component {

    constructor (props) {
        super(props)

        this.state = {
            value: '',
            isLoading: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault() //stop it from trying to go to the next page


        const accessToken = 'pk.eyJ1Ijoic2N3MDkxIiwiYSI6ImNrZXR6eGx0cTBraTYyc28wZmRmdmI0OWoifQ.rjOl3X3jh9C5kEtH7v6zBw'
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`

        fetch(url)
            .then(response => response.json())
            .then(data => {

                const places = this.props.app.state.places

                const firstResult = data.features[0]

                places.push({ //push the new place to the places array whenever a new one is added!
                    name: this.state.value,
                    latitude: firstResult.center[1],
                    longitude: firstResult.center[0]
                })
        
                this.props.app.setState({
                    places:places
                })
        
                this.setState({
                    value: ""
                })
        
            })





        
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <input value = {this.state.value} onChange = {this.handleChange} placeholder = "search for a place"></input>
            </form>
        )
    }
}

export default Search