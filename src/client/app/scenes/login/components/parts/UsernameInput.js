"use strict"
import React from "react"

const UsernameInput = (props) => (
  <div>
    <div className="form-group">
      <label htmlFor="username">
        Username:
      </label>
      <input name="username"
             type="text"
             value={props.username}
             onChange={props.onUsernameChange}
             className="form-control"
             placeholder="Enter name..." />
    </div>
  </div>
)

UsernameInput.propTypes = {
  username: React.PropTypes.string,
  onUsernameChange: React.PropTypes.func.isRequired
}

export default UsernameInput