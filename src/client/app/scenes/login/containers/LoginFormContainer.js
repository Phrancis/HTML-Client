"use strict"
import React from "react"
import LoginForm from "../components/LoginForm"

class LoginFormContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LoginForm/>
    )
  }
}

export default LoginFormContainer