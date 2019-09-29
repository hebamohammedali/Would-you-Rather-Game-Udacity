import React, { Component } from 'react'
import { connect } from 'react-redux'

class LognInPage extends Component {
  render() {
    const { users, onLogin } = this.props
    const selectUser = "Select The User"

    return (
      <select defaultValue='none' onChange={event => onLogin(event.target.value)}>
        <option value='none' disabled> {selectUser}  </option>
        {Object.keys(users).map(eachUser => (
          <option
            value={users[eachUser].id}
            key={users[eachUser].id}>
            {users[eachUser].name}
          </option>
        ))}
      </select>
    )
  }
}

function stateMappingToProps({ users }) {
  return {
    users: users
      ? users
      : {}
  }
}

export default connect(stateMappingToProps)(LognInPage)
