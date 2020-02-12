import React, { Component } from "react"
import Authentication from "./Authentication"

import Posts from "./Posts"

class Application extends Component {
  render() {
    return (
      <main className='Application'>
        <h1>Job Tracker</h1>
        <Authentication />
        <Posts />
      </main>
    )
  }
}

export default Application
