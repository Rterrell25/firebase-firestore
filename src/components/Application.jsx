import React, { Component } from "react"
import Authentication from "./Authentication"
import { Switch, Route, Link } from "react-router-dom"
import Posts from "./Posts"
import userProfile from "./userProfile"

class Application extends Component {
  render() {
    return (
      <main className='Application'>
        <Link to='/'>
          <h1>Job Tracker</h1>
        </Link>
        <Authentication />
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route exact path='/profile' component={userProfile} />
        </Switch>
      </main>
    )
  }
}

export default Application
