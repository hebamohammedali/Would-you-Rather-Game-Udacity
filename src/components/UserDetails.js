import React, { Component } from 'react'
import { connect } from 'react-redux'
import RankCounter from './RankCounter'

class User extends Component {
  render() {
    const { NoOfQuestion, NoOfAnswers, user } = this.props

    return (
       <div className='user-scores'>
         <div
          className='user-avatar small' style={{ backgroundImage: `url(${user.avatarURL})`}} >
        </div>
         <p>{user.name}</p>
        <RankCounter
          label='Number of Questions'
          score={NoOfQuestion} />
        <RankCounter
          label='Number of Answers'
          score={NoOfAnswers} />
      </div>
    )
  }
}

function stateMappingToProps({ users }, { id }) {
  const user = users[id]
  console.log("user", user.avatarURL);
  return { user }
}
export default connect(stateMappingToProps)(User)
