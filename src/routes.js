import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile/:name" component={Profile} />
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>
)