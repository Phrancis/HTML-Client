"use strict"
import React from "react"
import OtherServerInput from "../../containers/parts/OtherServerInputContainer"


/**
 * Server selection part of login form.
 * @constructor
 */
const ServerSelect = (props) => {

  /**
   * Map server list to <option> tags.
   */
  const serverList = props.servers.map((server) => {
    return (
      <option key={server.id}
              value={server.url}>
        {server.name}
      </option>
    )
  })

  /**
   * Display the OtherServerInput form if a URL is not provided by the server selection.
   * @param {string} serverUrl - the URL of the selected server
   * @returns {XML}
   */
  const displayOtherServerInputConditionally = (serverUrl) => {
    if (!serverUrl) {
      return <OtherServerInput/>
    }
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="server">
          Server:
        </label>
        <select className="form-control"
                value={props.serverUrl}
                onChange={props.onChange}>
          {serverList}
        </select>

        {displayOtherServerInputConditionally(props.serverUrl)}

        <label htmlFor="secure">
          Is secure server:
        </label>
        <input name="secure" type="checkbox" value="secure"/>
      </div>
    </div>
  )
}

ServerSelect.propTypes = {
  servers: React.PropTypes.array.isRequired,
  serverUrl: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default ServerSelect