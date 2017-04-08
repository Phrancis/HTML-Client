"use strict"
import React from "react"
import LoginFormContainer from "../scenes/login/containers/LoginFormContainer"

/**
 * Test page to view visual elements by themselves.
 * @constructor
 */
const DemoVisualElements = () => (
  <div>
    <h1>
      Demo Visual Elements
    </h1>
    <hr/>

    <h2>Login</h2>
    <hr/>
    <LoginFormContainer/>
  </div>
)

export default DemoVisualElements