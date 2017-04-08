"use strict"
import React from "react"

const OtherServerInput = (props) => (
  <div className="form-group">
    <div>
      <label htmlFor="server_other_input">
        Other server:
      </label>
      <input name="server_other_input"
             type="text"
             value={props.otherServerUrl}
             onChange={props.onChange}
             className="form-control"
             placeholder="Server address & port"/>
    </div>
  </div>
)

OtherServerInput.propTypes = {
  otherServerUrl: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

export default OtherServerInput