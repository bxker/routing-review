import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        if (this.props.match.params.name === 'jacob') {
            return <h1>Welcome, jacob</h1>
        }
        return (
            <div>
                {this.props.match.params.name !== 'jacob' ?
                    <h1>Welcome to your profile, {this.props.match.params.name}</h1>
                    :
                    <h1>{this.props.match.params.name}'s profile Component</h1>
                }
            </div>
        )
    }
}
