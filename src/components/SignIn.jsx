import React, { Component } from "react"
import { signInWithGoogle } from "../firebase"

class SignIn extends Component {
  state = { email: "", password: "" }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: "", password: "" })
  }

  render() {
    const { email, password } = this.state

    return (
      <form className='SignIn' onSubmit={this.handleSubmit}>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </form>
    )
  }
}

export default SignIn
