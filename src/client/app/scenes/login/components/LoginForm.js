"use strict"
import React from "react"
import ServerSelect from "../containers/parts/ServerSelectContainer"
import UsernameInput from "../containers/parts/UsernameInputContainer"
import FormSubmit from "../containers/parts/FormSubmitContainer"
import GettingStarted from "../containers/parts/GettingStartedContainer"

/**
 * Form where users enter server and login information.
 * @constructor
 * TODO extract individual form elements to own components
 */
const LoginForm = () => (
  <div>
    <h4>
      Please log in to continue, or see below for instructions and assistance.
    </h4>
    <form name="login_form" className="login-form">

      <ServerSelect/>

      <UsernameInput/>

      <FormSubmit/>

      <GettingStarted/>

    </form>
  </div>
)

export default LoginForm