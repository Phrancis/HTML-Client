"use strict"
import React from "react"
import ReactDOM from "react-dom"
import DemoVisualElements from "./demo/DemoVisualElements"

class App extends React.Component {
  render() {
    return (
      <div>
        <DemoVisualElements/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
)
