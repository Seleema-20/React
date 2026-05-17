import React, { Component } from 'react'

class Timer extends Component {
  componentWillUnmount() {
    console.log("Component Removed")
  }

  render() {
    return <h1>Timer</h1>
  }
}

export default Timer