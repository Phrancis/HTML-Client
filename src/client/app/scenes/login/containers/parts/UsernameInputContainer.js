"use strict"
import React from "react"
import UsernameInput from "../../components/parts/UsernameInput"
const MAX_USERNAME_LENGTH = require("../../../../../config/constants").MAX_USERNAME_LENGTH

class UsernameInputContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      charsLeft: MAX_USERNAME_LENGTH
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
  }

  handleUsernameChange(event) {
    const input = event.target.value
    const length = input.length
    if (length <= MAX_USERNAME_LENGTH) {
      this.setState({
        username: input,
        charsLeft: MAX_USERNAME_LENGTH - length
      })
    }
  }

  render() {
    return (
      <UsernameInput username = {this.state.username}
                     onUsernameChange={this.handleUsernameChange} />
    )
  }
}

export default UsernameInputContainer