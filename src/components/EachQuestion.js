import React, { Component } from 'react'
import { connect } from 'react-redux'


function stateMappingToProps({ users, questions }, { id }) {
  const auth = questions.hasOwnProperty(id)
    ? questions[id].author
    : ''

  const avatarURL = users.hasOwnProperty(auth)
    ? users[auth].avatarURL
    : ''

  return  { avatarURL }
}

class EachQuestion extends Component {
  render() {
    const { onClick, avatarURL } = this.props

    return (
      <div className='view-box small' onClick={onClick}>
        <div
          className='user-avatar small'
          style={{
            backgroundImage: `url(${avatarURL})`
          }} >
        </div>
        <h2 className='title'> Would you Rather ??!! </h2>
    </div>
    )
  }
}

export default connect(stateMappingToProps)(EachQuestion)
