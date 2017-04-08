"use strict"
import React from "react"
import OtherServerInput from "../../components/parts/OtherServerInput"

class OtherServerInputContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      otherServerUrl: ""
    }
    this.handleOtherServerChange = this.handleOtherServerChange.bind(this)
  }

  handleOtherServerChange(event) {
    this.setState({ otherServerUrl: event.target.value })
  }

  render() {
    return (
      <OtherServerInput otherServerUrl={this.state.otherServerUrl}
                        onChange={this.handleOtherServerChange}/>
    )
  }
}

export default OtherServerInputContainer