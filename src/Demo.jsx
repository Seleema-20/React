import React, { Component } from 'react'

class Demo extends Component {
  ComponentDidMount() {
    console.log("Component Mounted")
  }

  render() {
    return <h1>Hello</h1>
  }
}

export default Demo