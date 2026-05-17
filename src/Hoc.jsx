import React, { Component } from 'react'

const withCounter = (WrappedComponent) => {
  class NewComponent extends Component {
    state = {
      count: 0
    }

    increment = () => {
      this.setState({
        count: this.state.count + 1
      })
    }

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increment={this.increment}
        />
      )
    }
  }

  return NewComponent
}

export default withCounter