import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            name: ''
        }
    }

    nameInput = (val) => {
        console.log(val)
        this.setState({name: val})
    }

    render() {
        return (
            <div>
                <h1>home component</h1>
                <input onChange={(e) => this.nameInput(e.target.value)}></input>
                <Link to="/about">About</Link>
                <Link to={`/profile/${this.state.name}`}>Profile</Link>
            </div>
        )
    }
}
