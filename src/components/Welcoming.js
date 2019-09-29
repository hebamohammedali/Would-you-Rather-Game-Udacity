import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeAuthenticatedUser } from '../actions/authedUser'

class Welcominig extends Component {
  render() {
    const { userName, loggedIn, avatarURL, logout } = this.props

    return (
      <div className='welcome-user'>
        <div className='user'> <span> { userName } </span>
          <div
            className='avatar avatar-img' style={{ backgroundImage: `url(${avatarURL})`}} />
        </div>
        {loggedIn && (
          <button onClick={logout} className='logout-button'>Logout</button>
        )}
      </div>
  
    )
  }
}

function stateMappingToProps({ authedUser, users }) {
  let loggedIn = false
  let userName = "..."
  let avatarURL
  if ( authedUser !== null) 
  {
    if (users.hasOwnProperty(authedUser)) 
    {
      loggedIn = true
      userName = users[authedUser].name
      avatarURL = users[authedUser].avatarURL
    }
  }
  console.log (loggedIn, userName, avatarURL);
  return { loggedIn, userName, avatarURL }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(removeAuthenticatedUser())
    }
  }
}

export default connect(stateMappingToProps, mapDispatchToProps)(Welcominig)
