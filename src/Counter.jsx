import React, { Component } from 'react'

class Counter extends Component {
  state = { count: 0 }

  componentDidUpdate() {
    console.log("Updated")
  }

  render() {
    return (
      <button onClick={() =>
        this.setState({ count: this.state.count + 1 })
      }>
        {this.state.count}
      </button>
    )
  }
}

export default Counter