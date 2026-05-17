import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
  state = { users: [] }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({ users: res.data })
      })
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </div>
    )
  }
}

export default Users