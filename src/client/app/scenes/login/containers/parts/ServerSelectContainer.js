"use strict"
import React from "react"
import ServerSelect from "../../components/parts/ServerSelect"
const GAME_SERVERS = require("../../../../../config/constants").GAME_SERVERS


/**
 * Server selection part of login form.
 */
class ServerSelectContainer extends React.Component {

  /**
   *
   * TODO find an alternative to hard-coding a value as initial serverUrl.
   * @param props
   */
  constructor(props) {
    super(props)
    this.state = {
      servers: GAME_SERVERS,
      serverUrl: "ws://127.0.0.1:4243"
    }
    this.handleServerChange = this.handleServerChange.bind(this)
  }

  /**
   * Update the game server URL value when it is changed in the browser.
   * @param {Object} event - the selection on a server option in the browser.
   */
  handleServerChange(event) {
    this.setState({ serverUrl: event.target.value })
  }

  render() {
    return (
      <ServerSelect servers={this.state.servers}
                    serverUrl={this.state.serverUrl}
                    onChange={this.handleServerChange} />
    )
  }
}

export default ServerSelectContainer