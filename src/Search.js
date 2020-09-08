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

        this.setState({
            value: ""
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